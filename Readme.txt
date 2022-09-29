Guarde keycloak en otro lado porque pesa mucho

https://drive.google.com/drive/folders/1_nxoeaWhG_A9QAu36eC92KGK6V7XT1Qd?usp=sharing

Si solo quieren ejecutarlo la ruta es donde lo tienen /keycloak-19.0.2/bin/kc.sh start-dev


-- Configuracion Keycloak

Editar keycloak.json de acuerdo al despliegue configurado en el servidor donde se este ejecutando el servicio

-- Copiar keycloak

La ruta donde lo guarde es en /opt, si copian todo del keycloak-19.0.2 y el .service ya lo tiene configurado en esa ruta

-- Correr Keycloak como servicio

Como root entrar a la ruta /etc/systemd/system y crear un archivo keycloak.service, la configuracion del ExecStart =/opt/keycloak-19.0.2/bin/kc.sh start-dev, es la ruta donde tienen descargado o copiada la ruta de  keycloak ejecuntando el script con el comando  para correr en desarrollo
ejecutar los comandos
sudo systemctl daemon-reload
sudo systemctl start keycloak
sudo systemctl status keycloak -- verificar estado

La configuracion ya en ejecucion se ve en localhost:8080 o si se usa otro la consola del keycloak lo indica

