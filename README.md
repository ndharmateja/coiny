# Coiny

## Description

- Coiny is a command line tool to get the top cryptocurrencies by market cap and latest prices of different cryptocurrencies in various currency options.
- It uses the Crypto Compare API. Users should first get an API Key (free) from [here](https://www.cryptocompare.com/cryptopian/api-keys) and set the key using the CLI.

## Requirements

- Node 20 or above.
- npm

## Examples

### Check prices

- Default (no options): Get top 10 coins by market cap
- Use **-t** or **--top** option for specifying limit
- Use **--coin** option for getting data for specific coins
- Use **--curr** option for specifying currency (default: USD)

```
$ coiny check price

+-----+-------+-------------+--------------+------------+
|  #  | Coin  |    Price    | 24H Change % | Market Cap |
+-----+-------+-------------+--------------+------------+
|  1. |   BTC | $ 30,033.30 |      -1.54 % | $ 583.30 B |
|  2. |   ETH |  $ 1,858.51 |      -2.72 % | $ 223.30 B |
|  3. |  USDT |      $ 1.00 |      +0.01 % |  $ 85.80 B |
|  4. |   XRP |      $ 0.47 |      -2.41 % |  $ 46.63 B |
|  5. |   BNB |    $ 232.27 |      -2.78 % |  $ 36.67 B |
|  6. |  USDC |      $ 1.00 |      +0.03 % |  $ 27.52 B |
|  7. | STETH |  $ 1,858.14 |      -2.72 % |  $ 14.08 B |
|  8. |   ADA |      $ 0.28 |      -1.06 % |  $ 12.65 B |
|  9. |   SOL |     $ 19.99 |      +5.21 % |  $ 11.03 B |
| 10. |   ARB |      $ 1.08 |      -2.79 % |  $ 10.81 B |
+-----+-------+-------------+--------------+------------+
```

```
$ coiny check price -t 7

+----+-------+-------------+--------------+------------+
| #  | Coin  |    Price    | 24H Change % | Market Cap |
+----+-------+-------------+--------------+------------+
| 1. |   BTC | $ 30,047.40 |      -1.49 % | $ 583.58 B |
| 2. |   ETH |  $ 1,859.00 |      -2.69 % | $ 223.35 B |
| 3. |  USDT |      $ 1.00 |      +0.01 % |  $ 85.80 B |
| 4. |   XRP |      $ 0.47 |      -2.41 % |  $ 46.63 B |
| 5. |   BNB |    $ 232.36 |      -2.74 % |  $ 36.69 B |
| 6. |  USDC |      $ 1.00 |      +0.03 % |  $ 27.52 B |
| 7. | STETH |  $ 1,858.63 |      -2.69 % |  $ 14.08 B |
+----+-------+-------------+--------------+------------+
```

```
$ coiny check price --top=25 --curr=GBP

+-----+-------+-------------+--------------+------------+
|  #  | Coin  |    Price    | 24H Change % | Market Cap |
+-----+-------+-------------+--------------+------------+
|  1. |   BTC | £ 23,593.60 |      -1.82 % | £ 458.23 B |
|  2. |   ETH |  £ 1,458.68 |      -3.04 % | £ 175.26 B |
|  3. |  USDT |      £ 0.78 |      -0.24 % |  £ 67.34 B |
|  4. |   XRP |      £ 0.37 |      -2.63 % |  £ 36.67 B |
|  5. |   BNB |    £ 182.52 |      -3.02 % |  £ 28.82 B |
|  6. |  USDC |      £ 0.78 |      -0.24 % |  £ 21.60 B |
|  7. | STETH |  £ 1,458.39 |      -3.04 % |  £ 11.05 B |
|  8. |   ADA |      £ 0.22 |      -1.38 % |   £ 9.94 B |
|  9. |   SOL |     £ 15.71 |      +5.01 % |   £ 8.67 B |
| 10. |   ARB |      £ 0.85 |      -3.12 % |   £ 8.48 B |
| 11. |   OKB |     £ 33.61 |      -2.10 % |   £ 7.93 B |
| 12. |  DOGE |      £ 0.05 |      -2.98 % |   £ 7.20 B |
| 13. |   APT |      £ 5.62 |      -4.12 % |   £ 5.86 B |
| 14. |   LTC |     £ 75.24 |      -6.89 % |   £ 5.52 B |
| 15. |   TRX |      £ 0.06 |      -0.27 % |   £ 5.45 B |
| 16. | MATIC |      £ 0.52 |      -0.89 % |   £ 5.23 B |
| 17. |  WETH |  £ 1,470.94 |      -3.04 % |   £ 5.01 B |
| 18. |  LINK |      £ 4.79 |      -3.46 % |   £ 4.79 B |
| 19. |   DOT |      £ 3.96 |      -3.51 % |   £ 4.79 B |
| 20. |   BCH |    £ 220.52 |      +2.79 % |   £ 4.29 B |
| 21. |  AVAX |      £ 9.80 |      -1.73 % |   £ 4.24 B |
| 22. |   UNI |      £ 4.20 |      -1.41 % |   £ 4.20 B |
| 23. |    OP |      £ 0.94 |      -3.07 % |   £ 4.03 B |
| 24. |   XLM |      £ 0.08 |      -4.37 % |   £ 3.79 B |
| 25. |  WBTC | £ 23,586.90 |      -1.82 % |   £ 3.71 B |
+-----+-------+-------------+--------------+------------+
```

```
$ coiny check price --curr=EUR

+-----+-------+-------------+--------------+------------+
|  #  | Coin  |    Price    | 24H Change % | Market Cap |
+-----+-------+-------------+--------------+------------+
|  1. |   BTC | € 27,591.90 |      -1.90 % | € 535.89 B |
|  2. |   ETH |  € 1,707.57 |      -3.03 % | € 205.16 B |
|  3. |  USDT |      € 0.92 |      -0.31 % |  € 78.79 B |
|  4. |   XRP |      € 0.43 |      -2.86 % |  € 42.80 B |
|  5. |   BNB |    € 213.70 |      -3.13 % |  € 33.74 B |
|  6. |  USDC |      € 0.92 |      -0.30 % |  € 25.27 B |
|  7. | STETH |  € 1,707.23 |      -3.03 % |  € 12.94 B |
|  8. |   ADA |      € 0.26 |      -1.37 % |  € 11.63 B |
|  9. |   SOL |     € 18.37 |      +4.91 % |  € 10.14 B |
| 10. |   ARB |      € 0.99 |      -3.36 % |   € 9.90 B |
+-----+-------+-------------+--------------+------------+
```

```
$ coiny check price --coin=BTC,ETH,POLC,DOGE,USDT,ADA,BNB

+----+------+-------------+--------------+------------+
| #  | Coin |    Price    | 24H Change % | Market Cap |
+----+------+-------------+--------------+------------+
| 1. |  BTC | $ 30,011.10 |      -1.61 % | $ 582.87 B |
| 2. |  ETH |  $ 1,856.08 |      -2.84 % | $ 223.00 B |
| 3. | POLC |      $ 0.01 |      +1.71 % |   $ 2.69 B |
| 4. | DOGE |      $ 0.07 |      -2.63 % |   $ 9.14 B |
| 5. | USDT |      $ 1.00 |      +0.01 % |  $ 85.80 B |
| 6. |  ADA |      $ 0.28 |      -1.34 % |  $ 12.61 B |
| 7. |  BNB |    $ 231.99 |      -2.88 % |  $ 36.63 B |
+----+------+-------------+--------------+------------+
```

```
$ coiny check price --coin=BTC,XRP,ETH,ADA --curr=INR

+----+------+----------------+--------------+---------------+
| #  | Coin |     Price      | 24H Change % |  Market Cap   |
+----+------+----------------+--------------+---------------+
| 1. |  BTC | ₹ 2,195,040.20 |      +1.24 % | ₹ 42,631.86 B |
| 2. |  XRP |        ₹ 34.04 |      +0.24 % |  ₹ 3,403.20 B |
| 3. |  ETH |   ₹ 135,763.20 |      +0.00 % | ₹ 16,311.63 B |
| 4. |  ADA |        ₹ 20.45 |      +1.48 % |    ₹ 920.07 B |
+----+------+----------------+--------------+---------------+
```

### Key management

```
$ coiny key set

? (https://www.cryptocompare.com/cryptopian/api-keys)
Enter API Key: a5fa608621d26a886503d1de41cd91410142
Successfully set the key.
```

```
$ coiny key show

API Key: a5fa608621d26a886503d1de41cd91410142
```

```
$ coiny key remove

Successfully removed the key.
```

## Usage

```
$ coiny --help

Usage: coiny [options] [command]

Options:
   -V, --version   output the version number
   -h, --help      display help for command

Commands:
   key             Manage API key -> Get at https://www.cryptocompare.com/cryptopian/api-keys
   check           Check cryptocurrency coins prices
   help [command]  display help for command
```

```
$ coiny key --help

Usage: coiny-key [options] [command]

Options:
   -h, --help      display help for command

Commands:
   set             Set API Key -> Get at https://www.cryptocompare.com/cryptopian/api-keys
   show            Show API Key
   remove          Remove API Key
   help [command]  display help for command
```

```
$ coiny check -help

Usage: coiny-check [options] [command]

Options:
   -h, --help display help for command

Commands:
   price [options]  Check price of coins. Gets list of top 10 coins by market cap if no options are specified. Use --coin option
                    to get prices for specific coins.
   help [command]   display help for command
```

```
$ coiny check price --help

Usage: coiny-check price [options]

Check price of coins. Gets list of top 10 coins by market cap if no options are specified. Use --coin option to get prices for
specific coins.

Options:
   -t --top <limit>   Get top coins by market cap (default: 10)
   --curr <currency>  Change the currency (default: "USD")
   --coin <type>      Specific coin types comma separated
   -h, --help         display help for command
```
