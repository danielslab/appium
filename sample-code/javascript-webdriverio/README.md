# Javascript WebdriverIO Client Sample Code

## Setup
* Sever 
** Installation via Desktop App Download
* Must have NodeJS and NPM installed (https://nodejs.org/en/)

* driver
** There are a number of such drivers that give you access to different kinds of automation technologies, 
** and each come with their own particular setup requirements. 
** Most of these requirements are the same requirements as for app development on a specific platform. 

* client
** Install dependencies by running `npm install`
** npm install webdriverio

## Verifying the Installation

npm install -g appium-doctor, then run the appium-doctor command, supplying the --ios or --android flags to verify that all of the dependencies are set up correctly.



## Running Tests

* To run all of the tests, run `npm test`
* To run individual tests, run `$(npm bin)/mocha test/path/to/test.js`

## Troubleshooting

* ```Original error: '11.1' does not exist in the list of simctl SDKs. Only the following Simulator SDK versions are available on your system: x.y```
  * By default, these example tests expect IOS version 11.1
  * If 11.1 isn't available on your system, set the version by setting environment variable `IOS_PLATFORM_VERSION` or install with Xcode
    (e.g.: `IOS_PLATFORM_VERSION=11.2 $(npm bin)/mocha -t 6000000 test/path/to/test.js`)
