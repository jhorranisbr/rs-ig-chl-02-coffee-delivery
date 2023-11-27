/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ADDRESS_ZIPCODE: string
  readonly VITE_ADDRESS_STREET: string
  readonly VITE_ADDRESS_NUMBER: string
  readonly VITE_ADDRESS_COMPLEMENT: string
  readonly VITE_ADDRESS_DISTRICT: string
  readonly VITE_ADDRESS_CITY: string
  readonly VITE_ADDRESS_REGION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
