# 0. ANS-C01 むずかしすぎる

ANS-C01を勉強しているのですが、すごくむずかしいです。
特に難しいのが、ゲートウェイ、インターフェイス、エンドポイント、プライベート、パブリックなど似た用語がたくさんできてて、こんがらがってしまうところです。
本記事では、前述した用語を整理したいのでまとめてみます。

※本記事は、2023年9月1日時点の情報になります。最新の情報はAWSの公式ドキュメントを参照ください。記事に誤りがある可能性があります！記事の内容については自己責任で活用をおねがいします🙏

## 0.1. この記事に書いてあるもの

- Gateway（Internet, NAT, Egress-only, Virtual Private, Transit）
- VPCエンドポイント（インターフェイス型、ゲートウェイ型）
- 仮想インターフェイス（パブリック、プライベート）
- ※上記ですべてを網羅しているわけではありません。例えば、仮想インターフェイスにはトランジットもありますが、ここでは取り扱っていません。

---

# 1. Gateway

## 1.1. Internet Gateway(インターネットゲートウェイ)

**VPC⇔インターネット**

VPCとインターネットで接続するために使う。

## 1.2. NAT Gateway

**VPC⇒インターネット**

パブリックIPを持っていないインスタンスが、IPをNAT変換するために使う。

## 1.3. Egress-only Internet Gateway

**VPC⇒インターネット**

NAT GatewayはIPv4をNATするが、Egress-onlyはIPv6をNATする。

## 1.4. Virtual Private Gateway(仮想プライベートゲートウェイ)

**VPC⇔ユーザ拠点**

VPNやDirect Connectを利用して、ユーザ拠点とVPCをつなぐ際のVPC側の出入口。

## 1.5. Transit Gateway

**VPC⇔VPC⇔ユーザ拠点**

複数のVPCや、VPCとユーザ拠点を接続するときに使う。

---

# 2. VPCエンドポイント

VPCエンドポイントを利用することで、インターネットに出ることなくVPC内のリソースとAWSの各サービスが通信できるようになる。
VPCエンドポイントにはインターフェイス型とゲートウェイ型の2種類がある。

## 2.1. インターフェイス型

プライベートIPアドレスでAWSのサービスに接続できるようになる。
ENIがプライベートIPアドレスを持っていて、そこにアクセスする感じ。
お金がかかる。

![image.png](/images/posts/vAcaMz9QLrdz7wfXlzfZT/bilGKGEaM5PkbKLIfFoFF.png)

## 2.2.ゲートウェイ型

パブリックIPアドレスでAWSのサービスに接続できるようになる。
VPCのルートテーブルが書き換えられることで、インターネットに出ないでサービスに接続できるようになる。
VPC内のリソースから、S3とDynamoDBに接続するときにだけ使える。
無料。

![image.png](/images/posts/vAcaMz9QLrdz7wfXlzfZT/8DDcNAz3OgqNlq8j8Litw.png)

---

# 3. 仮想インターフェイス（VIF）

Direct Connect接続を開始するために必要。

## 3.1. パブリック仮想インターフェイス

ユーザ拠点とAWSが、パブリックIPアドレスでつながります。VPC外のサービスを専用線経由で使いたいときに使う。

![image.png](/images/posts/vAcaMz9QLrdz7wfXlzfZT/BsIysFTmApcHYyYq7X8ie.png)

パブリック仮想インターフェイス単体では、VPCとの接続はできません。しかし、VPNを利用すると接続が可能になる。
また、Direct Connectでの通信は暗号化されません。こちらも、VPNを利用することで暗号化することができる。
Amazon Site-to-Site VPNサービスを利用することで、IPsec VPNを張ることができる。

![image.png](/images/posts/vAcaMz9QLrdz7wfXlzfZT/7JdCFhcOrAyZDvBp4BtsH.png)

## 3.2. プライベート仮想インターフェイス

ユーザ拠点とAWSが、プライベートIPアドレスでつながる。VPC内のサービスを専用線経由で使いたいときに使う。

![image.png](/images/posts/vAcaMz9QLrdz7wfXlzfZT/ngCAQoWErndXuZh3ktpaG.png)

---

# 4. まとめ

めちゃくちゃ種類が多いのかなと思っていましたが、あらためて整理してみるとそうでもないかも？
この記事を書いたおかげで少し理解が深まりました。
