module.exports = {
  branches: ["main"], // Ana dalı belirtiyoruz
  repositoryUrl: "https://github.com/serkankas/CI-CD_workspace_backend.git", // GitHub repo URL'niz
  plugins: [
    [
      "@semantic-release/commit-analyzer", // Commit mesajlarını analiz etmek için
      {
        preset: "conventionalcommits", // Konvansiyonel commitlere dayalı versiyonlama
      },
    ],
    "@semantic-release/release-notes-generator", // Release notlarını oluşturur
    [
      "@semantic-release/github", // GitHub release ve tag oluşturma işlemi
      {
        assets: [], // Eğer release ile birlikte belirli dosyaları yüklemek isterseniz bu kısmı doldurabilirsiniz.
      },
    ],
    [
      "@semantic-release/changelog", // CHANGELOG.md dosyasını güncelle
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git", // Güncellenen CHANGELOG.md dosyasını commit et ve pushla
      {
        assets: ["CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
