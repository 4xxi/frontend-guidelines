# Docker

## Mac OS

Сперва надо установить [Docker for mac](https://docs.docker.com/docker-for-mac/install/)

Далее для работы возможны два варианта - поставить [docker-sync](http://docker-sync.io/) или использовать docker-machine (уже есть в комплекте к Docker for mac). Второй вариант более производительный.

### Docker-machine

1. Установить [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Установить [docker-machine-nfs](https://github.com/adlogix/docker-machine-nfs)
2. В консоли перейти в нужную папку
3. Выполнить `docker-machine create name` (name - любое имя для машины по которому в дальнейшем к ней будете обращаться)
4. Выполнить `docker-machine-nfs name` для более быстрой синхронизации
5. Выполнить `eval(docker-machine env name)` чтобы экспортировать в окружение переменные машины. Отдельно посмотреть их можно через `docker-machine env name`. После этого в текущем окне терминала у вас будет доступ к виртуальной машине.
7. Выполнить `VBoxManage modifyvm "name" --natdnshostresolver1 on` чтобы виртуальная машина использовала DNS хоста.
8. В `/etc/hosts` прописать адрес для айпишника машины, если нужно. Посомтреть ip можно через `docker-machine ip name`.*
9. Запустить `docker-compose up -d` и дальнейшие инструкции для конкретного проекта.


\* Для того чтобы задать статичный ip для вируальной машины - выполнить `echo "ifconfig eth1 192.168.99.102 netmask 255.255.255.0 broadcast 192.168.99.255 up" | docker-machine ssh trivago sudo tee /var/lib/boot2docker/bootsync.sh > /dev/null` где `192.168.99.102` - тот ip который нужен.

