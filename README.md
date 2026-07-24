# اشتراك IPTV - almmalki-tv

موقع اشتراكات IPTV بتصميم ذهبي ملكي.

## التقنيات المستخدمة

- React 19
- Vite
- Tailwind CSS 4
- TypeScript

## النشر على Vercel

### خطوات النشر:

1. اربط هذا المستودع مع حسابك على [Vercel](https://vercel.com)
2. Vercel سيكتشف إعدادات `vercel.json` تلقائياً
3. Framework Preset: اختر **Vite**
4. Build Command: `pnpm build`
5. Output Directory: `dist/public`
6. Install Command: `pnpm install`

### أو يدوياً عبر Vercel CLI:

```bash
pnpm install
pnpm build
vercel --prod
```

## الدومين

- الدومين المخصص: `quickstream.uk`
- يجب إضافة DNS Records في Cloudflare:
  - CNAME: `quickstream.uk` -> `cname.vercel-dns.com`
  - أو A Record: `quickstream.uk` -> `76.76.21.21`

## تطوير محلي

```bash
pnpm install
pnpm dev
```

الموقع سيكون متاحاً على `http://localhost:3000`
