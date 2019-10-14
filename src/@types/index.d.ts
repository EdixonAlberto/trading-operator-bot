import { Dictionary, Order } from "ccxt";

type typeExchange =
    | '_1btcxe'
    | 'acx'
    | 'adara'
    | 'allcoin'
    | 'anxpro'
    | 'bcex'
    | 'bequant'
    | 'bibox'
    | 'bigone'
    | 'binance'
    | 'binanceje'
    | 'binanceus'
    | 'bit2c'
    | 'bitbank'
    | 'bitbay'
    | 'bitfinex'
    | 'bitfinex2'
    | 'bitflyer'
    | 'bitforex'
    | 'bithumb'
    | 'bitkk'
    | 'bitlish'
    | 'bitmart'
    | 'bitmex'
    | 'bitso'
    | 'bitstamp'
    | 'bitstamp1'
    | 'bittrex'
    | 'bitz'
    | 'bl3p'
    | 'bleutrade'
    | 'braziliex'
    | 'btcalpha'
    | 'btcbox'
    | 'btcchina'
    | 'btcmarkets'
    | 'btctradeim'
    | 'btctradeua'
    | 'btcturk'
    | 'buda'
    | 'bxinth'
    | 'cex'
    | 'chilebit'
    | 'cobinhood'
    | 'coinbase'
    | 'coinbaseprime'
    | 'coinbasepro'
    | 'coincheck'
    | 'coinegg'
    | 'coinex'
    | 'coinexchange'
    | 'coinfalcon'
    | 'coinfloor'
    | 'coingi'
    | 'coinmarketcap'
    | 'coinmate'
    | 'coinone'
    | 'coinspot'
    | 'cointiger'
    | 'coolcoin'
    | 'coss'
    | 'crex24'
    | 'crypton'
    | 'deribit'
    | 'digifinex'
    | 'dsx'
    | 'dx'
    | 'ethfinex'
    | 'exmo'
    | 'exx'
    | 'fcoin'
    | 'fcoinjp'
    | 'flowbtc'
    | 'foxbit'
    | 'fybse'
    | 'gateio'
    | 'gdax'
    | 'gemini'
    | 'hitbtc'
    | 'hitbtc2'
    | 'huobipro'
    | 'huobiru'
    | 'ice3x'
    | 'idex'
    | 'independentreserve'
    | 'indodax'
    | 'itbit'
    | 'kkex'
    | 'kraken'
    | 'kucoin'
    | 'kucoin2'
    | 'kuna'
    | 'lakebtc'
    | 'latoken'
    | 'lbank'
    | 'liquid'
    | 'livecoin'
    | 'luno'
    | 'lykke'
    | 'mandala'
    | 'mercado'
    | 'mixcoins'
    | 'negociecoins'
    | 'nova'
    | 'oceanex'
    | 'okcoincny'
    | 'okcoinusd'
    | 'okex'
    | 'okex3'
    | 'paymium'
    | 'poloniex'
    | 'rightbtc'
    | 'southxchange'
    | 'stronghold'
    | 'surbitcoin'
    | 'theocean'
    | 'therock'
    | 'tidebit'
    | 'tidex'
    | 'upbit'
    | 'vaultoro'
    | 'vbtc'
    | 'virwox'
    | 'xbtce'
    | 'yobit'
    | 'zaif'
    | 'zb'

type typeCredential = {
    apiKey: string,
    secret: string
}

type typeOrder = {
    symbol: Order['symbol'],
    type: Order['type'],
    side: Order['side'],
    amount: Order['amount'],
    price: Order['price'],
    params?: Dictionary<string | number>
}

type typeBodyBuySell = {
    type?: Order['type'],
    amount: number,
    price: number
}

// TODO: for future internal error handling
type typeErrorInternal = {
    status: number,
    code?: number,
    type: string,
    message: string
}

type typeStatus = Order['status'] | 'all';

export {
    typeExchange,
    typeCredential,
    typeOrder,
    typeBodyBuySell,
    typeErrorInternal,
    typeStatus
}
