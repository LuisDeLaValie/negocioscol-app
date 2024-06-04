# NegociosCol APP
![Home](doc/login.png)
![Home](doc/registro.png)
![Home](doc/home.png)
![Home](doc/buscar.png)
![Home](doc/negocio.png)
![Home](doc/setring.png)


---

**panel: [negocioscol.com](https://negocioscol.vercel.app/)**

**appi: [api-negosioscol](https://api-negosioscol-production.up.railway.app)**

**app: [negocioscol app](https://job-artifacts.eascdn.net/production/db688c5a-1d9c-48c4-a830-64ba053ae2f3/b167ce15-3cb9-4044-82ec-2f691c69b11d/application-5b72dbbc-c2b7-4ee6-a116-7a2fe8b2b33d.apk?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=www-production%40exponentjs.iam.gserviceaccount.com%2F20240604%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240604T184322Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=d62db77bc522fdfe7ca59af2d5ab6cfa46fff04120a93222792fb3230f72dd7c003923aa8cfc931cfdff3b339860f985e4641c9424c4c453e87e099137ed9ec0e5e1cae82fc58a69f4cce0e817c4773efcaa31f1689642505a9789e1a9d5b6d2daa837a5b68d5f344111755b44a97deffb292d41e334d8a195c9f947a4496763c41c36081012779e127574a261a62ebac2ad3f794790f94e071d2c2dc57c2f02c896735d2737ac3fef8bc25d5596780a1498d3a95c32364ddabc318663844482f4e4c21a33973619b67ef83b401adee3fb3d271bd41351495f2fa77c158f00efae85c0522c2ecbfdbb2da01db1d7fd829523057c7aff870bdbdf9fea7dc493a7)**




- [NegociosCol APP](#negocioscol-app)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [API](#api)
    - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [PANEL](#panel)
    - [Instrucciones para la instalación](#instrucciones-para-la-instalación-1)
  - [APP](#app)
    - [Instrucciones para la instalación](#instrucciones-para-la-instalación-2)



## Requisitos de instalación
## API

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

### Instrucciones para la instalación

1. Clonar el repositorio de la API en la máquina local:
   
   ```sh
   git clone https://github.com/LuisDeLaValie/api_negosioscol.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd api_negosioscol
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:8081`.


5. Clonar el repositorio del panel en la máquina local:
   
   ```sh
   git clone https://github.com/LuisDeLaValie/negocioscol-panel.git
   ```

6. Navegar al directorio del proyecto:
   
   ```sh
   cd negocioscol-panel
   ```
7. Insertar las dependencia de la aplicación
   
   ```sh
   npm i
   ```
8. Renombrar el archivo `.env.example` a `.env.local` para agregar la variable de entorno. Asegurese de que  `NEXT_PUBLIC_PUBLIC_API_URL` tenga la ruta de la API
    > NOTA:
    > Este proyecto usa NEXTJS por lo que es importante que el `.env` tenga el nombre `.env.local` de lo contrario nextjs no reconocera los env
    >
    > para mas informacion ver [nextjs environment](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

9. Ejecutar el panel
    ```sh
    npm run dev
    ```
## PANEL

### Instrucciones para la instalación

1. Clonar el repositorio del panel en la máquina local:
   
   ```sh
   git clone https://github.com/LuisDeLaValie/negocioscol-panel.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd negocioscol-panel
   ```
3. Insertar las dependencia de la aplicación
   
   ```sh
   npm i
   ```
4. Renombrar el archivo `.env.example` a `.env.local` para agregar la variable de entorno. Asegurese de que  `NEXT_PUBLIC_PUBLIC_API_URL` tenga la ruta de la API
    > NOTA:
    > Este proyecto usa NEXTJS por lo que es importante que el `.env` tenga el nombre `.env.local` de lo contrario nextjs no reconocera los env
    >
    > para mas informacion ver [nextjs environment](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

5. Ejecutar el panel
    ```sh
    npm run dev
    ```
## APP

### Instrucciones para la instalación

1. Clonar el repositorio de la app en la máquina local:
   
   ```sh
   git clone https://github.com/LuisDeLaValie/negocioscol-app.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd negocioscol-app
   ```
3. Insertar las dependencia de la aplicación
   
   ```sh
   npm i
   ```
4. Renombrar el archivo `.env.example` a `.env` para agregar la variable de entorno. Asegurese de que  `EXPO_PUBLIC_API_URL` tenga la ruta de la API
    > NOTA:
    > Este proyecto usa EXPO.
    > para mas informacion ver [Environment variables in Expo](https://docs.expo.dev/guides/environment-variables/)


5. Redirigiremos el trafico de nuetra api a nuetro emulador con el siguinte comando. Esto es para poder escuchar el puerto 8081 de nuetro local en el emulador
   
```sh
 adb -s emulator-5554 reverse tcp:8081 tcp:8081
```
   > Asegurece de tener el emulador ejecutando para que este pueda conectarse
   



1. Ejecutar el APP
    ```sh
    npm run android
    ```
