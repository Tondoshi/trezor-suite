# Data Analytics

Upon an explicit permission both web and desktop Suite applications collect anonymous[^1] data about how the user interacts with Suite. This document describes what data we collect in greater detail.

**Tl;dr:**
1. We track only upon an explicit permission.
2. We do not track any particular financial data. We do not know how many Bitcoins you have.
3. We use AWS logging for data analytics and Sentry for error tracking.

For users that wish not to be tracked we only track such decision and then no data are shared. This means we do not collect any data, automated Sentry reports (see below) or any other data. Exception is when the user specifially invokes such action via the "Report a bug" button or similar.

## Our own data collection

We collect data in the form of HTTP requests to our AWS S3 bucket. We then transform these data logs into data we further analyze. See [AWS](aws.md) for more detailed info.

## Sentry

To be able to deliver our product in the best shape we use [Sentry.io](https://sentry.io/) for error tracking and performance monitoring for those users with enabled analytics. See [Sentry](sentry.md) chapter for more info.


[^1]: By "anonymous" we mean that we do not collect any personal data. As we use AWS and Sentry they will see your IP address but we neither track nor analyze that in any way.
