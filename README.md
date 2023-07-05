# Coiny

## Description

- Coiny is a command line tool to get the latest prices of different cryptocurrencies in various currency options. The default currency is USD.
- It uses the Crypto Compare API. Users should first get an API Key (free) from [here](https://www.cryptocompare.com/cryptopian/api-keys) and set the key using the CLI.
- Requires Node 20 or above.

## Examples

### Check prices

- Default coins: BTC, ETH, BNB, DOGE, ADA
- Default currency: USD

```c
$ coiny check price

*----*------*------------*
| #  | Coin |   Price    |
*----*------*------------*
| 1. | BTC  | $ 30,814.3 |
| 2. | ETH  | $ 1,938.66 |
| 3. | BNB  | $ 243.00   |
| 4. | DOGE | $ 0.06906  |
| 5. | ADA  | $ 0.2933   |
*----*------*------------*
```

```c
$ coiny check price --curr=EUR

*----*------*------------*
| #  | Coin |   Price    |
*----*------*------------*
| 1. | BTC  | € 28,325.9 |
| 2. | ETH  | € 1,782.11 |
| 3. | BNB  | € 223.12   |
| 4. | DOGE | € 0.06339  |
| 5. | ADA  | € 0.2689   |
*----*------*------------*
```

```c
$ coiny check price --coin=BTC,XRP --curr=INR

*----*------*---------------*
| #  | Coin |     Price     |
*----*------*---------------*
| 1. | BTC  | ₹ 2,157,711.9 |
| 2. | XRP  | ₹ 34.19       |
*----*------*---------------*
```

```c
$ coiny check price --curr=EUR --coin=BTC,ETH,BTCM,BTCL,POLC,DOGE,USDT,ADA,BNB

*----*------*-------------*
| #  | Coin |    Price    |
*----*------*-------------*
| 1. | BTC  | € 28,310.7  |
| 2. | ETH  | € 1,781.38  |
| 3. | BTCM | € 0.03561   |
| 4. | BTCL | € 0.0005662 |
| 5. | POLC | € 0.01047   |
| 6. | DOGE | € 0.06325   |
| 7. | USDT | € 0.9180    |
| 8. | ADA  | € 0.2689    |
| 9. | BNB  | € 223.06    |
*----*------*-------------*
```

### Key management

```c
$ coiny key set

? (https://www.cryptocompare.com/cryptopian/api-keys)
Enter API Key: a5fa608621d26a886503d1de41cd91410142
Successfully set the key.
```

```c
$ coiny key show

API Key: a5fa608621d26a886503d1de41cd91410142
```

```c
$ coiny key remove

Successfully removed the key.
```

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
    --coin <type> Specific coin types comma separated (default: "BTC,ETH,BNB,DOGE,ADA")
    --curr <currency> Change the currency (default: "USD")
    -h, --help display help for command
   ```
