
# Versiyonlama

## 1) Django uygulaması oluşturma
Öncelikle Python Django uygulaması oluşturmak gerek. 
İlk olarak bir proje oluşturuyoruz.
```shell
python -m django --version

django-admin startproject mysite

python manage.py startapp myapp
```
Bu kodlar ile bir Django projesi ve bir django app'i oluşturmuş oluyoruz.

## 2) Semantic Versiyon 0.1.0

Semantic versiyonlama için gerekli tooları yüklememiz gerekiyor.

```shell
pip install djangorestframework

pip install semantic-release
```

Semantic verisyonlama yapılandırması için **release.config.js** doyasını oluşturmalıyız.
Bu dosyayı projenin kök dizininde oluşturmalıyız. 
İçerisine bu kodu eklemeliyiz.

```shell
module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/your-repo/your-project',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    '@semantic-release/git'
  ],
  preset: 'conventionalcommits',
  tagFormat: '${version}',
  changelogFile: 'CHANGELOG.md'
};

```

Ardından semantic release kullanmak için package.json dosyasına ihtiyacımız olcaktır.
Yine projenin kök diizininde **package.json** adlı bir dosya oluşturmalıyız.


```shell
{
  "name": "my-django-project",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "semantic-release": "^17.4.2",
    "@semantic-release/changelog": "^6.0.1",
    "@semantic-release/git": "^10.0.1",
    "@semantic-release/github": "^8.0.5",
    "@semantic-release/npm": "^8.0.3"
  },
  "release": {
    "branches": ["main"],
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      "@semantic-release/npm",
      "@semantic-release/github",
      "@semantic-release/git"
    ],
    "preset": "conventionalcommits",
    "tagFormat": "${version}",
    "changelogFile": "CHANGELOG.md"
  },
  "scripts": {
    "semantic-release": "semantic-release"
  }
}

```