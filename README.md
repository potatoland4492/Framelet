# Framelet

![chrome-test](https://img.shields.io/badge/Google%20Chrome-passing-success?logo=googlechrome) ![framelet-count](https://img.shields.io/badge/Framelet%20Count-2-informational)

Framelet is a collection of "iframers" that work from the bookmarks bar.

## Framelets (newest to oldest)

1. [Original](/javascript/original.js)
2. [Percent80](/javascript/percent80.js)

## Usage

Copy the JavaScript code from file that you prefer. Create a new bookmark. In the URL field, paste the Framelet. Click the bookmark to use.

## Interface

To start, there is a simple prompt that asks the user to enter a valid URL.

![interface-prompt](/images/interface-prompt.png)

After a URL is submitted, the `<iframe>` appears along with a `<button>` that closes it (screenshot cropped).

![interface-button](/images/interface-button.png)

When the button is pressed, both the `<iframe>` and `<button>` elements disappear, leaving the page as it was with no trace of any editing.

## Drawbacks

1. Framelets do not work on new tab pages (e.g. `chrome://newtab`)
2. Some websites can block "iframing". There is no workaround as far as the author knows.
3. If an invalid URL is given, the Framelet will not work, and the page will have to be reloaded.
