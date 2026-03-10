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
          { text: 'BuildingSkins', link: '/plugins/building-skins' },
          { text: 'CopyPaste', link: '/plugins/copy-paste' },
          { text: 'CustomSpawnPoints', link: '/plugins/custom-spawn-points' },
          { text: 'CustomVendingSetup', link: '/plugins/custom-vending-setup' },
          { text: 'DailyRewards', link: '/plugins/daily-rewards' },
          { text: 'DynamicMonuments', link: '/plugins/dynamic-monuments' },
          { text: 'Economics', link: '/plugins/economics' },
          { text: 'ExtraTea', link: '/plugins/extra-tea' },
          { text: 'FireworkGun', link: '/plugins/firework-gun' },
          { text: 'GameOverScreen', link: '/plugins/game-over-screen' },
          { text: 'ImageLibrary', link: '/plugins/image-library' },
          { text: 'InitialHealthModifier', link: '/plugins/initial-health-modifier' },
          { text: 'Loottable', link: '/plugins/loottable' },
          { text: 'MonumentAddons', link: '/plugins/monument-addons' },
          { text: 'MonumentFinder', link: '/plugins/monument-finder' },
          { text: 'NoFlykick', link: '/plugins/no-flykick' },
          { text: 'NoGiveNotices', link: '/plugins/no-give-notices' },
          { text: 'Notify', link: '/plugins/notify' },
          { text: 'NPCShop', link: '/plugins/npc-shop' },
          { text: 'NpcPlacer', link: '/plugins/npc-placer' },
          { text: 'RobLoot', link: '/plugins/rob-loot' },
          { text: 'RobSpawn', link: '/plugins/rob-spawn' },
          { text: 'ScavengerHunt', link: '/plugins/scavenger-hunt' },
          { text: 'SignArtist', link: '/plugins/sign-artist' },
          { text: 'SimpleLogo', link: '/plugins/simple-logo' },
          { text: 'SpawnLoadout', link: '/plugins/spawn-loadout' },
          { text: 'Spawns', link: '/plugins/spawns' },
          { text: 'TechTree', link: '/plugins/tech-tree' },
          { text: 'Telekinesis', link: '/plugins/telekinesis' },
          { text: 'Upgrader', link: '/plugins/upgrader' },
          { text: 'Welcomer', link: '/plugins/welcomer' },
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
