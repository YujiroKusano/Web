# Web
## 環境構築方法
### Git
- gitを初期化

  ```git remote add origin https://github.com/YujiroKusano/Web.git```
  
- リモートレポジトリを設定

  ```git remote add origin https://github.com/YujiroKusano/Web.git```

- リモートリポジトリからソースをローカルリポジトリへプル

  ```git pull```

- ローカルリポジトリからソースをリモートリポジトリへプッシュ

  ```git push```

- リモートのmasterからローカルブランチ作る

  ```git checkout -b /name/version origin/master"```

### Docker
- コンテナを構築

  ```docker-compose build```

- コンテを起動(バックグラウンド)

  ```docker-compose up -d```

- コンテナ起動確認

  ```docker-compose ps```

- コンテナ接続

  ```docker-compose run コンテナ名 sh```

## 動作確認
- FRONT側
  - ブラウザでフロント画面が開かれることを確認
  [http://localhost](http://localhost)
- API側
  - ブラウザでAPIにアクセスして404にならないこと
  [http://localhost/api](http://localhost/api)
