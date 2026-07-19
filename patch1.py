import re

f = '/home/isthismylife37/FixItFirst/FixitFirst/src/App.tsx'
s = open(f).read()

old = '''<div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 border-2 border-red-600 flex items-center justify-center bg-zinc-900 text-red-600 font-black text-base sm:text-lg italic hover:rotate-6 transition-transform shrink-0">
              FF
            </div>
            <div className="min-w-0">
              <h1 className="text-sm xs:text-base sm:text-xl font-black uppercase tracking-tight text-white leading-none truncate">
                FIX IT <span className="text-red-600">FIRST</span>
              </h1>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-zinc-500 font-bold block mt-1 truncate">
                BY RUBEN
              </span>
            </div>
          </div>'''

new = '''<div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            <img src={logo} alt="Fix It First by Ruben" className="h-10 sm:h-12 w-auto shrink-0" />
          </div>'''

if old in s:
    s = s.replace(old, new)
    print('HEADER REPLACED OK')
else:
    print('HEADER NOT FOUND')

old2 = '''<h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase text-white break-words">
                FIX IT <span className="text-red-600">FIRST.</span>
              </h1>
              <span className="block text-base sm:text-lg md:text-2xl text-zinc-500 tracking-[0.2em] font-black mt-3 sm:mt-4">BY RUBEN</span>'''

new2 = '''<img src={logo} alt="Fix It First by Ruben" className="w-full max-w-md mx-auto" />'''

if old2 in s:
    s = s.replace(old2, new2)
    print('HERO REPLACED OK')
else:
    print('HERO NOT FOUND')

open(f, 'w').write(s)
