---
title: How to sign your commits with GPG if you are a Windows user.
date: 2022-08-22
excerpt: |
  Signing your commits is very important because it not only validates
    those commits but also provides greater security for our work.
---


Just like on paper, digital signatures can be verified. In other words, if you upload a signed commit, your colleagues or work team will be able to verify that it was really you who signed it, using the public key.

If someone else uploads code to GitHub or GitLab using your email address or username, you can easily prove that you did not do the work, as it is not digitally signed by you.

In summary, it is important to sign your commits so that you can verify the authenticity of the work or collaborations you do.

**How to use a GPG key in Windows?**

GPG is a cross-platform key management system used for encrypting and digitally signing messages and files.

I was trying to find an article that showed how to create GPG keys in Windows, but it was really difficult to find one that was at least understandable and didn't skip any steps.



**Step 1**

**Install GnuPG and gpg4win.**

<img src="/images/uploads/1661196711322.png" alt="undefined" style="width: 25%;" class="align-center" title="undefined" />

Once on the page, scroll down until you find the section shown in the image. Then click on the first two links to download both programs. Once downloaded, proceed to install them.



**Step 2**

**Create the GPG key**

Open GitBash and, from your user directory, enter the following command:

```
gpg --full-generate-key
```

Following this, we will see this result, where we will select the first (1) option.

<img src="/images/uploads/1661197720094.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

It will then ask us how long our key should be, with a range between 1024 and 4096 bits. It is best to use between 2048 and 4096, which is what I used, or you can simply use the one recommended by GitBash (3072), as long as it is within these values.

<img src="/images/uploads/1661198864403.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

The next step is to specify the key duration. According to what I have read online, 24 months is best, but you can choose whatever you think is appropriate. You must enter the number plus the letter for the period. In my case, it was 24m (24 months).

<img src="/images/uploads/1661199004625.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />



<img src="/images/uploads/1661199138586.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

Once the date is confirmed, you will be asked for your name and email address, which must be the same as the one on your GitHub or GitLab account.

<img src="/images/uploads/1661199352606-1-.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />



We type “O” and press the Enter key if everything is correct.

If we have completed the first step correctly, this window will not appear, asking you for a password to make your key more secure.

<img src="/images/uploads/1661199618237.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

In my case, I decided to leave it without a password. Click “OK” and wait a moment for the same window to appear asking for password confirmation. Enter it, or not, as appropriate, and click “OK.”

With that, it would be created. Now we need to get the public key that we will link to GitHub in this case.

**Step 3**

When installing the programs in the first step, Kleopatra should have been installed and opened.

<img src="/images/uploads/1200px-kleopatra_logo.svg.webp" alt="undefined" style="width: 35%;" class="align-center" title="undefined" />

Before opening it, we will go back to GitBash and type the following commands:

```
gpg --list-secret-keys --keyid-format=long
```

<img src="/images/uploads/1661201735821.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

Copy the secret key (which you should never share with anyone) that appears after rsa4096/ and before the date 2022-08-22.

Now type the following command, replacing 12345 with your key.

```
git config --global user.signingkey 12345

```

<img src="/images/uploads/1661202021659.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

Now we export our key with this command.

```
gpg --export-secret-keys >~/.gnupg/secring.gpg
```

Once that is done, we proceed to open Kleopatra and import the file we generated with GitBash.

<img src="/images/uploads/1661200752837.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

Select the secring.gpg file, which will be in the .gnupg folder in your user path. C:\Users\yourUser\.gnupg

<img src="/images/uploads/1661200973124.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

We accept everything, and we should end up with something like this.

<img src="/images/uploads/1661201257571.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

Once here, select the key with your name and click Export. This will export a file with the extension .asc, similar to this: Emanuel Rico Conde_0xEFE00000_public.asc. This file is the public key, which you must add to your GitHub account.

Open the file with Notepad and copy all of its contents. Next, go to your GitHub account settings and look for the SSH and GPG Keys section.

<img src="/images/uploads/1661202270425.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

New GPG Key.

<img src="/images/uploads/1661202331805.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

We add a title, and in the large box we paste the contents of the public key.

<img src="/images/uploads/1661202483969.webp" alt="undefined" style="width: 50%;" class="align-center" title="undefined" />

That's it! Now you can sign your commits as a Windows user. To sign a commit, you must add the -S flag to it.

```
git commit -S -m"My first signed commit"
```

If you've made it this far, thank you very much for reading this article. I hope it has been helpful.
