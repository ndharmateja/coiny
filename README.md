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

+-----+-------+------------+--------------+------------+
|  #  | Coin  |   Price    | 24H Change % | Market Cap |
+-----+-------+------------+--------------+------------+
|  1. |   BTC | $ 30,482.6 |       -0.93% | $ 592.00 B |
|  2. |   ETH | $ 1,909.39 |       -1.35% | $ 229.42 B |
|  3. |  USDT |     $ 1.00 |        0.00% |  $ 85.80 B |
|  4. |   XRP |   $ 0.4771 |       -2.25% |  $ 47.70 B |
|  5. |   BNB |   $ 238.70 |       -1.40% |  $ 37.69 B |
|  6. |  USDC |   $ 0.9997 |        0.00% |  $ 27.67 B |
|  7. | STETH | $ 1,908.05 |       -1.35% |  $ 14.42 B |
|  8. |   ADA |   $ 0.2834 |       -2.88% |  $ 12.75 B |
|  9. |   ARB |     $ 1.11 |       -3.05% |  $ 11.11 B |
| 10. |   SOL |    $ 19.03 |       -0.57% |  $ 10.50 B |
+-----+-------+------------+--------------+------------+
```

```
$ coiny check price -t 7

+----+-------+------------+--------------+------------+
| #  | Coin  |   Price    | 24H Change % | Market Cap |
+----+-------+------------+--------------+------------+
| 1. |   BTC | $ 30,482.5 |       -0.93% | $ 592.00 B |
| 2. |   ETH | $ 1,909.85 |       -1.33% | $ 229.47 B |
| 3. |  USDT |     $ 1.00 |        0.00% |  $ 85.80 B |
| 4. |   XRP |   $ 0.4771 |       -2.25% |  $ 47.70 B |
| 5. |   BNB |   $ 238.70 |       -1.40% |  $ 37.69 B |
| 6. |  USDC |   $ 0.9997 |        0.00% |  $ 27.67 B |
| 7. | STETH | $ 1,908.51 |       -1.33% |  $ 14.42 B |
+----+-------+------------+--------------+------------+
```

```
$ coiny check price --top=25 --curr=GBP

+-----+-------+------------+--------------+------------+
|  #  | Coin  |   Price    | 24H Change % | Market Cap |
+-----+-------+------------+--------------+------------+
|  1. |   BTC | £ 24,041.1 |       -1.01% | £ 466.91 B |
|  2. |   ETH | £ 1,508.70 |       -1.09% | £ 181.27 B |
|  3. |  USDT |   £ 0.7877 |        0.09% |  £ 67.58 B |
|  4. |   XRP |   £ 0.3765 |       -2.61% |  £ 37.65 B |
|  5. |   BNB |   £ 189.54 |       -1.17% |  £ 29.93 B |
|  6. |  USDC |   £ 0.7875 |        0.06% |  £ 21.79 B |
|  7. | STETH | £ 1,506.74 |       -1.17% |  £ 11.39 B |
|  8. |   ADA |   £ 0.2250 |       -2.68% |  £ 10.13 B |
|  9. |   ARB |   £ 0.8821 |       -2.60% |   £ 8.82 B |
| 10. |   SOL |    £ 15.36 |        1.32% |   £ 8.47 B |
| 11. |   OKB |    £ 34.20 |       -1.18% |   £ 8.07 B |
| 12. |  DOGE |  £ 0.05305 |       -2.45% |   £ 7.43 B |
| 13. |   APT |     £ 5.85 |       -3.20% |   £ 6.10 B |
| 14. |   LTC |    £ 81.73 |       -2.14% |   £ 5.99 B |
| 15. |   TRX |  £ 0.06130 |        0.57% |   £ 5.51 B |
| 16. | MATIC |   £ 0.5287 |       -4.69% |   £ 5.29 B |
| 17. |  WETH | £ 1,520.77 |       -0.30% |   £ 5.16 B |
| 18. |  LINK |     £ 4.97 |       -3.87% |   £ 4.97 B |
| 19. |   DOT |     £ 4.10 |       -3.30% |   £ 4.96 B |
| 20. |  AVAX |     £ 9.96 |       -3.21% |   £ 4.31 B |
| 21. |   UNI |     £ 4.25 |       -3.26% |   £ 4.25 B |
| 22. |   BCH |   £ 216.72 |       -0.50% |   £ 4.21 B |
| 23. |    OP |   £ 0.9773 |       -4.35% |   £ 4.20 B |
| 24. |   XLM |  £ 0.07870 |       -4.14% |   £ 3.94 B |
| 25. |  WBTC | £ 24,041.1 |       -1.01% |   £ 3.77 B |
+-----+-------+------------+--------------+------------+
```

```
$ coiny check price --curr=EUR

+-----+-------+------------+--------------+------------+
|  #  | Coin  |   Price    | 24H Change % | Market Cap |
+-----+-------+------------+--------------+------------+
|  1. |   BTC | € 28,094.9 |       -0.67% | € 545.63 B |
|  2. |   ETH | € 1,760.44 |       -1.07% | € 211.52 B |
|  3. |  USDT |   € 0.9212 |        0.30% |  € 79.04 B |
|  4. |   XRP |   € 0.4401 |       -2.00% |  € 44.01 B |
|  5. |   BNB |   € 220.40 |       -1.21% |  € 34.80 B |
|  6. |  USDC |   € 0.9212 |        0.33% |  € 25.50 B |
|  7. | STETH | € 1,759.21 |       -1.07% |  € 13.30 B |
|  8. |   ADA |   € 0.2613 |       -2.68% |  € 11.76 B |
|  9. |   ARB |     € 1.03 |       -3.02% |  € 10.28 B |
| 10. |   SOL |    € 17.60 |        0.00% |   € 9.71 B |
+-----+-------+------------+--------------+------------+
```

```
$ coiny check price --coin=BTC,ETH,POLC,DOGE,USDT,ADA,BNB

+----+------+------------+--------------+------------+
| #  | Coin |   Price    | 24H Change % | Market Cap |
+----+------+------------+--------------+------------+
| 1. |  BTC | $ 30,467.6 |       -0.98% | $ 591.71 B |
| 2. |  ETH | $ 1,909.05 |       -1.37% | $ 229.38 B |
| 3. | POLC |  $ 0.01059 |       -7.27% |   $ 2.64 M |
| 4. | DOGE |  $ 0.06687 |       -2.35% |   $ 9.37 B |
| 5. | USDT |     $ 1.00 |        0.00% |  $ 85.80 B |
| 6. |  ADA |   $ 0.2834 |       -2.88% |  $ 12.75 B |
| 7. |  BNB |   $ 238.70 |       -1.37% |  $ 37.69 B |
+----+------+------------+--------------+------------+
```

```
$ coiny check price --coin=BTC,XRP,ETH,ADA --curr=INR

+----+------+---------------+--------------+---------------+
| #  | Coin |     Price     | 24H Change % |  Market Cap   |
+----+------+---------------+--------------+---------------+
| 1. |  BTC | ₹ 2,166,319.4 |        0.40% | ₹ 42,072.20 B |
| 2. |  XRP |       ₹ 33.93 |       -0.79% |  ₹ 3,392.34 B |
| 3. |  ETH |   ₹ 135,763.2 |        0.00% | ₹ 16,312.34 B |
| 4. |  ADA |       ₹ 20.13 |       -1.72% |    ₹ 906.02 B |
+----+------+---------------+--------------+---------------+
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
