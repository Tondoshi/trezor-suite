import React from 'react';
import styled from 'styled-components';
import { ExchangeTrade } from 'invity-api';
import { formatCryptoAmount } from '@wallet-utils/coinmarket/coinmarketUtils';
import { colors, variables, CoinLogo } from '@trezor/components';
import { CoinmarketExchangeProviderInfo, CoinmarketTransactionId } from '@wallet-components';
import { Account } from '@wallet-types';
import { AccountLabeling, QuestionTooltip, Translation } from '@suite-components';
import { ExchangeInfo } from '@wallet-actions/coinmarketExchangeActions';
import invityAPI from '@suite-services/invityAPI';

interface Props {
    selectedQuote: ExchangeTrade;
    transactionId?: string;
    exchangeInfo?: ExchangeInfo;
    account: Account;
    receiveAccount?: Account;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: ${variables.SCREEN_SIZE.LG}) {
        flex: 1;
    }
`;

const AccountText = styled.div`
    font-weight: ${variables.FONT_WEIGHT.MEDIUM};
    color: ${colors.NEUE_TYPE_DARK_GREY};
    padding-left: 7px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    margin: 0 0 10px 30px;
    padding-top: 10px;
    min-height: 200px;
    border: 1px solid ${colors.NEUE_STROKE_GREY};
    border-radius: 4px;

    @media screen and (max-width: ${variables.SCREEN_SIZE.LG}) {
        flex: 1;
        margin: 20px 0 10px 0;
        width: 100%;
    }
`;

const LeftColumn = styled.div`
    display: flex;
    flex: 1;
    text-transform: uppercase;
    font-weight: ${variables.FONT_WEIGHT.MEDIUM};
    color: ${colors.NEUE_TYPE_LIGHT_GREY};
`;

const RightColumn = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
`;

const Row = styled.div`
    display: flex;
    margin: 20px 24px;
`;

const AdjacentRow = styled.div`
    display: flex;
    margin: -15px 24px 10px 24px;
`;

const Dark = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    font-weight: ${variables.FONT_WEIGHT.DEMI_BOLD};
    color: ${colors.NEUE_TYPE_DARK_GREY};
`;

const RowWithBorder = styled(Row)`
    border-top: 1px solid ${colors.NEUE_STROKE_GREY};
    border-bottom: 1px solid ${colors.NEUE_STROKE_GREY};
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 20px;
    padding-top: 20px;
`;

const Middle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Amount = styled.span`
    padding-left: 5px;
`;

const StyledQuestionTooltip = styled(QuestionTooltip)`
    padding-left: 3px;
`;

const InvityCoinLogo = styled.img`
    height: 16px;
`;

const AccountType = styled.span`
    color: ${colors.NEUE_TYPE_LIGHT_GREY};
    padding-left: 5px;
`;

const CoinmarketExchangeOfferInfo = ({
    selectedQuote,
    transactionId,
    exchangeInfo,
    account,
    receiveAccount,
}: Props) => {
    const { exchange, receiveStringAmount, receive, sendStringAmount, send } = selectedQuote;
    const provider =
        exchangeInfo?.providerInfos && exchange ? exchangeInfo?.providerInfos[exchange] : null;
    if (!provider) return null;

    return (
        <Wrapper>
            <Info>
                <Row>
                    <LeftColumn>
                        <Translation id="TR_EXCHANGE_SELL" />
                    </LeftColumn>
                    <RightColumn>
                        <Dark>
                            <CoinLogo symbol={account.symbol} size={16} />
                            <Amount>
                                {sendStringAmount} {send}
                            </Amount>
                        </Dark>
                    </RightColumn>
                </Row>
                <AdjacentRow>
                    <RightColumn>
                        <AccountLabeling account={account} />
                        <AccountType>
                            {account.accountType !== 'normal' ? account.accountType : ''}
                        </AccountType>
                    </RightColumn>
                </AdjacentRow>
                <Row>
                    <LeftColumn>
                        <Translation id="TR_EXCHANGE_BUY" />
                    </LeftColumn>
                    <RightColumn>
                        <Dark>
                            <InvityCoinLogo
                                src={`${invityAPI.server}/images/coins/${receive}.svg`}
                            />
                            <Amount>
                                {`${formatCryptoAmount(Number(receiveStringAmount))} ${receive}`}
                            </Amount>
                        </Dark>
                    </RightColumn>
                </Row>
                {receiveAccount && (
                    <AdjacentRow>
                        <RightColumn>
                            <AccountText>
                                <AccountLabeling account={receiveAccount} />
                                <AccountType>
                                    {receiveAccount.accountType !== 'normal'
                                        ? receiveAccount.accountType
                                        : ''}
                                </AccountType>
                            </AccountText>
                        </RightColumn>
                    </AdjacentRow>
                )}
                <RowWithBorder>
                    <Middle>
                        {provider.isFixedRate ? (
                            <>
                                <Translation id="TR_EXCHANGE_FIXED" />
                                <StyledQuestionTooltip tooltip="TR_EXCHANGE_FIXED_OFFERS_INFO" />
                            </>
                        ) : (
                            <>
                                <Translation id="TR_EXCHANGE_FLOAT" />
                                <StyledQuestionTooltip tooltip="TR_EXCHANGE_FLOAT_OFFERS_INFO" />
                            </>
                        )}
                    </Middle>
                </RowWithBorder>
                <Row>
                    <LeftColumn>
                        <Translation id="TR_EXCHANGE_PROVIDER" />
                    </LeftColumn>
                    <RightColumn>
                        <CoinmarketExchangeProviderInfo
                            exchange={exchange}
                            providers={exchangeInfo?.providerInfos}
                        />
                    </RightColumn>
                </Row>
            </Info>
            {transactionId && <CoinmarketTransactionId transactionId={transactionId} />}
        </Wrapper>
    );
};

export default CoinmarketExchangeOfferInfo;
