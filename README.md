# Coiny

## Description

- Coiny is a command line tool to get the latest prices of different cryptocurrencies in various currency options. The default currency is USD.
- It uses the Crypto Compare API. Users should first get an API Key (free) from [here](https://www.cryptocompare.com/cryptopian/api-keys) and set the key using the CLI.
- Requires Node 20 or above.

## Examples

### Key management

- <img src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pAaiZ_ZNuYt2QwVIemiGVPoyUpE7uglRiUxNqy1-_3D5GACzFlVFqVSUMkGBtJcZatRzWyQFRr5i3u9SYvxwI6wm3b=s1600" width="100%">
- <img src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pIx8pYZ35gr26xpTLO2oGAQ9dpzAHVWUddb8rkjM8J2VPsmFww1kHoxVpt4mQ7pW97glD5G2lm-0lOFORuDGh_aLHzTg=s1600" width="60%">
- <img src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81ouroUmmuIqoHaeq9ysuz-DMb0qKafV7AIR04se_0OHOb8wuGH4UzTele8G3LmFmLuNKa7FarA1oUE_o7JGZbaWvCKn=s2560" width="47%">

### Check prices

- <img src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81q8-Y94B4ounEeMYrbdGNs9_Eu9Gjz57CbiWJGBTkGGcomxtc0m_IGJVuo5MDVZkYMgUlaeXLVzusgQg7GwOb7UKfeSdA=s2560" width="47%">
- <img src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qhrooRu2cf6TBuPsFo7c2barx7fujTKnnYDyxJwUV8ri3qguDe4H_UAqpabOgvvixRmUH_5qnO6-TdsztiYjTBUNgpPg=s2560" width="53%">
- <img src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81p5YBWRIQmmxC42loCLTBGoRZKiKYWAOJmhYBl5k_1s3HQerGHGdqYBeBBhxZHvdg0S5kMabDioAI1yrFrytYgqSn9y=s1600" width="75%">
- <img src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81p1jEIXoyXzHO6PIEsp-NOUI84cXke3YIzolZ1WF1T4WlF8ebNtdxbfpbNJccB9lKbb-gEe69c8kbwyZB-0HQdJ3T12OA=s1600" width="100%">

## Usage

1. **coiny**

   ```
   Usage: coiny [options] [command]

   Options:
    -V, --version   output the version number
    -h, --help      display help for command

   Commands:
    key             Manage API key -> Get at https://www.cryptocompare.com/cryptopian/api-keys
    check           Check cryptocurrency coins prices
    help [command]  display help for command
   ```

2. **coiny key**

   ```
   Usage: coiny-key [options] [command]

   Options:
    -h, --help      display help for command

   Commands:
    set             Set API Key -> Get at https://www.cryptocompare.com/cryptopian/api-keys
    show            Show API Key
    remove          Remove API Key
    help [command]  display help for command
   ```

3. **coiny check**

   ```
   Usage: coiny-check [options] [command]
    Options:
    -h, --help display help for command

   Commands:
    price [options] Check price of coins
    help [command] display help for command
   ```

4. **coiny check price**

   ```
   Usage: coiny-check price [options]

   Check price of coins

   Options:
    --coin <type> Add specific coin types (comma separated) (default: "BTC,ETH,DOGE")
    --curr <currency> Change the currency (default: "USD")
    -h, --help display help for command
   ```
