Add to your `package.json`
```json
"prisma": {
    "seed": "node prisma/seed.js"
  }
```

Migrate :
```sh
npx prisma migrate dev --name init
```

Seeding : 
```sh
npx prisma db seed
```