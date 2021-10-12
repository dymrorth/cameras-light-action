type ImagesConfig = {
    base_url: string
    [prop: string]: any
}

export type ConfigurationApiResponse = {
    change_keys: string[]
    images: ImagesConfig
}