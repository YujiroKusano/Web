FROM node:latest

# ワーキングディレクトリを作成
WORKDIR /front

# アプリケーションのソースをバンドルする
COPY . .

# CMDが複数使えないためシェルに処理をまとめる
COPY /startup.sh /startup.sh
RUN chmod 744 /startup.sh

CMD ["/startup.sh"]