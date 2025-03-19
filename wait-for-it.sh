#!/bin/bash
# wait-for-it.sh

host=$1
shift
port=$1
shift
cmd="$@"

until nc -z -v -w30 $host $port
do
  echo "Aguardando o banco de dados MySQL estar disponível..."
  sleep 5
done

echo "Banco de dados MySQL está disponível!"
exec $cmd
