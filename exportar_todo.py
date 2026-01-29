import os

# Lista negra de cosas que NO queremos en el reporte
IGNORAR_CARPETAS = {'venv', '.git', '__pycache__', '.idea', '.vscode'}
IGNORAR_ARCHIVOS = {
    '.env',               # 🔒 SEGURIDAD: Nunca exportar claves
    'package-lock.json', 
    'poetry.lock',
    '.DS_Store',
    'exportar_todo.py',   # No hace falta exportarse a sí mismo
    'PROYECTO_OPORTUNAUTAS_COMPLETO.txt' # No exportar el archivo que estamos creando
}

def es_archivo_legible(nombre):
    # Solo queremos código y configuración relevante
    exts_validas = ['.py', '.md', '.txt', '.json', '.sql', '.html', '.css', '.js', '.gitignore', 'Procfile', 'runtime.txt']
    return any(nombre.endswith(ext) for ext in exts_validas)

def main():
    nombre_salida = "PROYECTO_OPORTUNAUTAS_COMPLETO.txt"
    
    print(f"📦 Empaquetando todo el código en {nombre_salida}...")
    
    with open(nombre_salida, 'w', encoding='utf-8') as f_out:
        f_out.write("=== REPORTE DE CÓDIGO - OPORTUNAUTAS ===\n")
        f_out.write("Este archivo contiene todo el código fuente actual del proyecto.\n\n")
        
        archivos_procesados = 0
        
        for raiz, carpetas, archivos in os.walk("."):
            # Filtramos las carpetas ignoradas para que os.walk no entre en ellas
            carpetas[:] = [d for d in carpetas if d not in IGNORAR_CARPETAS]
            
            for archivo in archivos:
                if archivo in IGNORAR_ARCHIVOS: continue
                if not es_archivo_legible(archivo): continue
                
                ruta_completa = os.path.join(raiz, archivo)
                
                # Escribimos encabezado visual para separar archivos
                f_out.write(f"\n{'='*60}\n")
                f_out.write(f"ARCHIVO: {ruta_completa}\n")
                f_out.write(f"{'='*60}\n")
                
                try:
                    with open(ruta_completa, 'r', encoding='utf-8') as f_in:
                        contenido = f_in.read()
                        f_out.write(contenido + "\n")
                    archivos_procesados += 1
                except Exception as e:
                    f_out.write(f"[Error leyendo archivo: {e}]\n")

    print(f"✅ ¡Listo! Se empaquetaron {archivos_procesados} archivos.")
    print(f"👉 El archivo '{nombre_salida}' está listo en tu carpeta.")
    print("⚠️ (Recuerda: Este archivo contiene tu código, no lo compartas públicamente).")

if __name__ == "__main__":
    main()