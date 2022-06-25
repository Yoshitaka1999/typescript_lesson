DATE=`date '+%Y-%m-%d %H:%M'`
HOUR=`date '+%H'`

if [ $HOUR -lt 12 ]; then
    ls -la
else
    echo $DATE
fi