import { Response } from "express";
import ExchangeServices from "../services/ExchangeServices";

const jsonResponse = (res: Response, json: object) => {
  res.status(200);
  res.contentType('application/json');
  res.json({
    exchange: ExchangeServices.getExchangeId(),
    data: json
  });
}

export default jsonResponse;
