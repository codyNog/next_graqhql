# next-graphql

## 主要ライブラリ

- graphql-codegen
- msw
- graphql-request
- SWR

## 設計

### data
`/domain/entity`でサービスとして扱いたいデータの型を定義し、  
`/apis`でリクエスト部分を定義、  
`/domain/repository`でentity <-> GraphQL typesの相互変換を行う  
data層とのやり取りは基本的にentityに定義されたデータ型か、もしくはプリミイティブなパラメーター(ex.`uid: string`)とする。  

### store
SWRでbackendのレスポンスをキャッシュする

### components
Atomic Designで管理する

### test
jest, @testing-library/react-hooksによるテスト  
リクエスト先のapiはmswでモックされる