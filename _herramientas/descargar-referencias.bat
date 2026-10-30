@echo off
chcp 65001 >nul
rem Descarga los reels de referencia que estan en _herramientas\lista.txt
rem a la carpeta _descargas (que no se sube a GitHub).
cd /d "%~dp0.."
if not exist "_descargas" mkdir "_descargas"
for /f "usebackq tokens=1,* delims= " %%a in ("_herramientas\lista.txt") do (
  echo Descargando %%a ...
  curl -sS -L --retry 2 -o "_descargas\%%a" "%%b"
)
echo.
echo Listo. Esta ventana se cierra sola.
timeout /t 4 >nul
