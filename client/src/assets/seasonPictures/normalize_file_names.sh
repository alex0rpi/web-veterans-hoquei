#!/bin/bash
# Substituir espacios por _ y eliminar paréntesis de los nombres.

# Buscar todos los archivos .webp en los directorios y subdirectorios
find . -type f -name "*.webp" | while read file; do
    # Obtener el directorio del archivo
    dir=$(dirname "$file")

    # Obtener el nombre del archivo sin la ruta del directorio
    filename=$(basename "$file")

    # Reemplazar los espacios en el nombre del archivo con _
    new_filename=$(echo "$filename" | tr ' ' '_' | sed 's/(//g' | sed 's/)//g')

    # Si el nombre del archivo ha cambiado, renombrar el archivo
    if [ "$filename" != "$new_filename" ]; then
        mv -v "$file" "$dir/$new_filename"
    fi
done