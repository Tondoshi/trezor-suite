# Data Analytics

Upon an explicit permission both web and desktop Suite applications collect anonymous[^1] data about how the user interacts with Suite. This document describes what data we collect in greater detail.

**Tl;dr:** Under no cirmuctances we do not track any specific financial data. We are interested in what firmware version you have, what coins are enabled and what actions you are doing. By no means we are tracking how many Bitcoins you have.

For users that wish not to be tracked we only track this decision and then no data are shared. This means we do not collect any data, automated Sentry reports (see below) or any other data. Exception is when the user specifially invokes such action via the "Report a bug" button or similar.

[^1] - By "anonymous" we mean that we do not collect any personal data. We do collect things such as browser version, timestamps etc. which might reduce the anonymity set, however we work with the data only in larger bulk amounts.

## Our own data collection

We collect data in the form of HTTP requests to our AWS S3 bucket. We then transform these data logs into data we use further. See [aws.md](aws) section for more detailed info.

## Sentry

To be able to deliver our product in the best shape we use [https://sentry.io/](Sentry.io) for error tracking and performance monitoring. See [sentry.md](Sentry) section for more info.
