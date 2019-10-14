Trading operator bot
=

A simple multi-exchange trading operator bot which receives buy/sell signals through an HTTP REST API

## Usage
- `yarn install`

**Mode Development**
- `yarn start`
- `yarn run dev`
- `yarn ru prod`

**Mode Production**
- `yarn run dist`

<!-- TODO: Add description -->


## End Points

HTTP request | Description
------------ | -------------
**GET** /api/ |
**GET** /api/time |
**GET** /api/`:exchange`/urls |
**GET** /api/`:exchange`/markets |
**GET** /api/`:exchange`/methods |
**GET** /api/`:exchange`/account/balance |
**GET** /api/`:exchange`/orders/orderbook/limit/`:limit` |
**GET** /api/`:exchange`/orders/status/`:status` |
**POST** /api/`:exchange`/orders/buy |
**POST** /api/`:exchange`/orders/sell |
**DELETE** /api/`:exchange`/orders/`:orderId` |
