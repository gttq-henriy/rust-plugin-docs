import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Rust Plugin Docs',
  description: 'Rust サーバープラグイン ドキュメント',
  base: '/rust-plugin-docs/',
  lang: 'ja',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'プラグイン一覧', link: '/plugins/boat-control' }
    ],
    sidebar: [
      {
        text: 'プラグイン一覧',
        items: [
          { text: 'ATMSystem', link: '/plugins/atm-system' },
          { text: 'BoatControl', link: '/plugins/boat-control' },
          { text: 'BossMonster', link: '/plugins/boss-monster' },
          { text: 'DailyRewards', link: '/plugins/daily-rewards' },
          { text: 'DynamicMonuments', link: '/plugins/dynamic-monuments' },
          { text: 'ExtraTea', link: '/plugins/extra-tea' },
          { text: 'GameOverScreen', link: '/plugins/game-over-screen' },
          { text: 'InitialHealthModifier', link: '/plugins/initial-health-modifier' },
          { text: 'Loottable', link: '/plugins/loottable' },
          { text: 'NPCShop', link: '/plugins/npc-shop' },
          { text: 'ScavengerHunt', link: '/plugins/scavenger-hunt' },
          { text: 'SpawnLoadout', link: '/plugins/spawn-loadout' },
          { text: 'TechTree', link: '/plugins/tech-tree' },
          { text: 'Upgrader', link: '/plugins/upgrader' },
          { text: 'XDQuest', link: '/plugins/xd-quest' },
          { text: 'xSkillSystem', link: '/plugins/x-skill-system' }
        ]
      }
    ],
    socialLinks: [],
    search: {
      provider: 'local'
    },
    outline: {
      label: '目次'
    },
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    }
  }
})
