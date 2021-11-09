# Data Analytics

Anonymous[^1] data volunteered by over 250,000 Trezor users directly contributes to improved performance across all the platforms you use Trezor Suite on. 

Participation is easy and completely optional. Enable or disable usage data sharing with one click at any time in Trezor Suite Settings. With full control over what you contribute, you can safely take part in making Bitcoin more secure.   

**TL;DR**
1. Data is only collected with explicit permission.
2. Your sensitive data is not collected.
3. We use AWS logging for data analytics and Sentry for error tracking.

## What data is collected?

When enabled, purely functional data about how the app is used will be collected and analyzed to find defects and inefficiencies. With explicit consent, both web and desktop applications may collect anonymous data such as user interactions with app functions, errors, hardware specifications and app response times.

If usage data is disabled only the decision not to share any data is recorded. This means we do not collect any data, automated Sentry reports (see below) or any other data. An exception is when a user specifically chooses to submit feedback or bug reports through Trezor Suite.

## How are the data processed?

Data are logged in the form of HTTP requests to an AWS S3 bucket. Those data logs are then transformed into sets which can be analyzed to give meaningful information. See [AWS](aws.md) for more detailed info about the particular events which are tracked.

## Error tracking using Sentry

To catch errors quickly and deliver you the best experience with your Trezor, we use [Sentry.io](https://sentry.io/), a tool for error tracking and performance monitoring. Data is only available to Sentry when usage data tracking is enabled. See our page about [Sentry](sentry.md) for more information on how it works.


[^1]: "Anonymous" means that we do not collect any sensitive personal information. AWS and Sentry will are able to view IP addresses but they are not tracked or collected by Trezor. Enable Tor when using Trezor Suite to mask your IP address from third parties.
