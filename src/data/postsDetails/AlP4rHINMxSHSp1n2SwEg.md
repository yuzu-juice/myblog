# やり方

## Windowsにインストールされている証明書を使う場合

PCに保存されている証明書の一覧を表示

```PowerShell:PowerShell
Get-ChildItem -path cert:\CurrentUser -Recurse
```

↑の実行結果から、使用したい証明書のThumbPrintをコピー

先ほどコピーしたThumbPrintをxxxxxxxxの部分に貼り付けて実行

```PowerShell:PowerShell
Invoke-WebRequest https://example.com -CertificateThumbprint "xxxxxxxx"
```

## フォルダに保存している証明書を利用する場合

```PowerShell:PowerShell
pfx = [System.IO.File]::ReadAllBytes('pfxファイルのパス')
cert = [System.Security.Cryptography.X509Certificates.X509Certificate2]::new($pfx, 'pfxファイルのパスワード')
Invoke-WebRequest https://example.com -Certificate $cert
```
