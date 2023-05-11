
class DocumentFinancialParsedModel {
  document_type: string;
  amount: number;
  currency: string;
  purchasedate: string;
  purchasetime: string;
  paymentmethod: string;
}

class DocumentFinancialQualityModel {
  blurriness: number;
  over_exposed: number;
  under_exposed: number;
  characters: number;
  unsupported_chars: number;
  non_text_chars: number;
  unknown_document_type: number;
}

export class DocumentFinancialModel  {
  parsed: DocumentFinancialParsedModel;
  quality: DocumentFinancialQualityModel;
  raw_text: string;
  has_duplicate: boolean;
}
