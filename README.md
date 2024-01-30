# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

### create-svelte

I created this project using;

```bash
pnpm create svelte@latest .

pnpm dlx svelte-add@latest tailwindcss

#Using svelte-add setup tailwind for this project

pnpm install

git add . && git commit -m "after installs" && git push origin main



pnpm dlx shadcn-svelte@latest init

## Developing

Once you've created a project and installed dependencies start a development server:

pnpm dev -- --host=10.10.4.41  #ip address is specific to the development server.
```

## Building

To create a production version of your app:

```bash
pnpm run build
```
 ## Shadcn-svelte components

 ```bash
  npx shadcn-svelte@latest add 
 ```
 ```bash
 Components installed at:
- src/lib/components/ui/alert-dialog
- src/lib/components/ui/button
- src/lib/components/ui/card
- src/lib/components/ui/checkbox
- src/lib/components/ui/context-menu
- src/lib/components/ui/form
- src/lib/components/ui/input
- src/lib/components/ui/label
- src/lib/components/ui/radio-group
- src/lib/components/ui/select
- src/lib/components/ui/switch
- src/lib/components/ui/textarea
- src/lib/components/ui/tabs
 ```

 ## Dexie js
 ```bash
 pnpm add dexie
 ```