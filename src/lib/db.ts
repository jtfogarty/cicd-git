// db.ts
import Dexie, { type Table } from 'dexie';

export interface GitLab {
  id?: number;
  username: string;
  token: string;
}

export interface NSG {
    id?: number;
    url: string;
  }

export interface AppCTX {
    id?: number;
    main_url: string;
  }

export interface DConf {
    id?: number;
    main_url: string;
    libs: string;
  }

export class MySubClassedDexie extends Dexie {
  // 'gitlab' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  gitlab!: Table<GitLab>; 
  nsg!: Table<NSG>;
  appctx!: Table<AppCTX>;
  dconf!: Table<DConf>;

  constructor() {
    super('CICDGit');
    this.version(1).stores({
        gitlab: '++id, username, token', 
        nsg:'++id, url',
        appctx: '++id, main_url',
        dconf: '++id, main_url, libs'
    });
  }
}

export const db = new MySubClassedDexie();