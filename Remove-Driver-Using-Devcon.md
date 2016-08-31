
<!-- TOC -->

- [The Story](#the-story)
- [WDK to the rescue](#wdk-to-the-rescue)
- [Ordeal with DEVCON.EXE](#ordeal-with-devconexe)
- [Automating stuff](#automating-stuff)
    - [The CSV file](#the-csv-file)

<!-- /TOC -->

# The Story 

There was a time when an administrator upgraded a piece of software 
which left some stale drivers on a windows 7 machine. The challenge was 
we had few thousand machines which needed the removal of this stale driver.

Windows being windows none could find a way to automate the solution. 

# WDK to the rescue 

There were two tools from the old ddk which are now a part of WDK 

- devcon 
- pnputil 

Given the research devcon.exe became the obvious choice but now the question 
was how to use it and how to identify which entry needs removal. 

# Ordeal with DEVCON.EXE 

Searching the devcon documentation on the msdn 
- Obtaining devcon 
    https://social.technet.microsoft.com/wiki/contents/articles/182.how-to-obtain-the-current-version-of-device-console-utility-devcon-exe.aspx
- Devcon commandline utility reference 
    https://msdn.microsoft.com/en-us/library/ff544707.aspx 

All the commands either needs a driver class e.g. Display, Net etc or hwids. Once we read 
through the documentation it was more or less experimenting with the drivers. e.g. let's say we 
need to uninstall Citrix's mirror driver from the system.

**__do not do this in a production environment unless you know what you are upto__**

```
>devcon hwids =display *
output 
ROOT\DISPLAY\0000
    Name: Citrix Display Mirror Driver
    Hardware IDs:
        Mirror_Driver  ---- this is the one we are going to remove 
ROOT\DISPLAY\0001
    Name: Citrix Systems Inc. Display Mirror Driver
    Hardware IDs:
        ctxroot\ctxid2

>REM REMOVAL
>devcon remove Mirror_Driver 
```

# Automating stuff 
Now we know our target commands we needed to figure out if the hwid of the device is same on 
all the machines. Post that it was a matter of getting all the machines in a csv file and then run 
powershell script 

```
> get-content allmachines.csv | %{ devcon -m $_ remove Mirror_Driver }
```

## The CSV file  

Single column file with no headers 

Machine1
Machine2 
Machine3 
...

so on  .. 





  