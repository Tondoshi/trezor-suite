import React from 'react';
import NetworkGroup from './components/NetworkGroup';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { H4, Loader, Icon, colors } from '@trezor/components';
import WalletLayout from '@wallet-components/WalletLayout';
import { sortByCoin } from '@wallet-utils/accountUtils';
import { NETWORKS } from '@wallet-config';
import { Network, Account } from '@wallet-types';
import { Props } from './Container';
import messages from './index.messages';

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const CardsWrapper = styled.div`
    margin-top: 10px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;

const AddMoreCoins = styled.div`
    display: flex;
    border: 1px solid ${colors.GRAY_LIGHT};
    border-radius: 4px;
    height: 110px;
    color: ${colors.TEXT_SECONDARY};
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    &:hover {
        border: 1px solid ${colors.DIVIDER};
    }
`;

const IconWrapper = styled.div`
    padding-right: 5px;
`;

const LoadingContent = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Dashboard = (props: Props) => {
    const discovery = props.getDiscoveryForDevice();
    const accounts = discovery
        ? sortByCoin(
              props.accounts.filter(
                  a => a.deviceState === discovery.deviceState && (!a.empty || a.visible),
              ),
          )
        : [];
    const group: { [key: string]: Account[] } = {};
    accounts.forEach(a => {
        if (!group[a.symbol]) {
            group[a.symbol] = [];
        }
        group[a.symbol].push(a);
    });

    const isLoading = !discovery || accounts.length < 1;

    return (
        <WalletLayout title="Dashboard">
            {isLoading && (
                <LoadingContent>
                    <Loader size={30} />
                </LoadingContent>
            )}
            {!isLoading && (
                <Content data-test="Dashboard__page__content">
                    <H4>Dashboard</H4>
                    <CardsWrapper>
                        {Object.keys(group).map(symbol => {
                            const network = NETWORKS.find(
                                n => n.symbol === symbol && !n.accountType,
                            ) as Network;
                            return (
                                <NetworkGroup
                                    key={symbol}
                                    network={network}
                                    accounts={group[symbol]}
                                />
                            );
                        })}
                        <AddMoreCoins
                            onClick={() => {
                                props.goto('wallet-settings');
                            }}
                        >
                            <IconWrapper>
                                <Icon icon="PLUS" size={10} color={colors.TEXT_SECONDARY} />
                            </IconWrapper>
                            <FormattedMessage {...messages.TR_ADD_MORE_COINS} />
                        </AddMoreCoins>
                    </CardsWrapper>
                </Content>
            )}
        </WalletLayout>
    );
};

export default Dashboard;
