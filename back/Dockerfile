# 1. Użyj oficjalnego obrazu Node.js jako bazowego
FROM node:20

# 2. Ustaw katalog roboczy wewnątrz kontenera
WORKDIR /app

# 3. Skopiuj pliki package.json i package-lock.json (jeśli istnieje)
#    do katalogu roboczego w kontenerze
COPY package*.json ./

# 4. Zainstaluj zależności
RUN npm ci

# 5. Skopiuj resztę plików aplikacji do kontenera
COPY . .

# 6. Otwórz port 3000 (lub inny port, na którym działa Express)
EXPOSE 80

# 7. Zdefiniuj komendę uruchamiającą aplikację
CMD ["node", "server.js"]