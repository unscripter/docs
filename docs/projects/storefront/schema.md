# schema

## Comman Interfaces
```ts
export interface Instance {
  id?: string
  title: string
}

export type ImageFields = {
  id: string
  src: string | null
  altText?: string | null
}

export interface CurrencyFields {
  id: string
  symbol: string
  lang: string
  selected: boolean
}
```

## internationalisation
```ts
  export interface InternationalFields {
    languageCode: string
    countryCode: string
    currencyCode: string
    currencySymbol: string
  }
}
```

## product
```ts
  export class Product implements Instance {
    id: string
    title: string
    tags?: string[] = []
    handle?: string = 'default'
    productType: string = 'xyz' // this should be called category
    descriptionHtml?: string
    collections: Instance[] = [] // only get id and title for collection
    images?: ImageFields[] | null = null
    variants?: VariantFields[] = []
    metafields?: MetaFields[] | null = null
  }
```

## Collection
```ts
  export interface Collection extends Instance {
    products?: Product[] | Instance[] // using any as type can help get differnt data type set here, need to decide after API's get fixed
    handle: string
    description?: string
    descriptionHtml?: string
    image?: ImageFields[] | ImageFields
  }
```