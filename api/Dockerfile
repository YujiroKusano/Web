FROM node:latest

# ワーキングディレクトリを作成
WORKDIR /api

# アプリケーションの依存関係をインストールする
COPY package.json ./package.json
RUN npm install

# アプリケーションのソースをバンドルする
COPY . .

# CMDが複数使えないためシェルに処理をまとめる
COPY /startup.sh /startup.sh
RUN chmod 744 /startup.sh

CMD ["/startup.sh"]