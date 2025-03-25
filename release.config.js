/**@type {import('@semantic-release/github/lib/config')} */
module.exports = {
    "branches": [
        "main"
    ],
    repositoryUrl: "https://github.com/Actunime/types",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
            "@semantic-release/github", {
                assets: ['package.json', 'CHANGELOG.md', 'build/**/*']
            }
        ],
        ["@semantic-release/git", {
            assets: ['package.json', 'CHANGELOG.md', 'build/**/*'],
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }
        ],
        "@semantic-release/npm"
    ],
    verifyConditions: ['@semantic-release/github'],
    publish: [
        {
            path: '@semantic-release/npm',
        },
        ['@semantic-release/github',
            {
                assets: ['package.json', 'CHANGELOG.md', 'build/**/*']
            }
        ]
    ]
}