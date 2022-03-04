let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _Rm 5.00/grup (1 minggu)_
║┊ ⌲ Sewa = _Rm 10.00/grup (2 minggu)_
║┊ ⌲ Sewa = _Rm 15.00/grup (3 minggu)_
║┊ ⌲ Sewa = _Rm 20.00/grup (1 bulan)_                                                                      ║┊ ⌲ Sewa = _45k/grup (12 bulan)_
╰═ ┅ ═══════
╭═══ *〘 PEMBAYARAN 〙*
║ ┅ ๑————————————๑
║┊ ⌲ _TOPUP/PIN_
║┊ ⌲ _60149431385 (digi)_
║┊ ⌲ _60189830350 (umobile)_
║┊ ⌲ owner : wa.me/60149431385
╰═ ┅ ═══════

༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*[❗] Jika Group Sepi 2 hari, bot akan leave*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD_

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Payment', '#payment', 'Owner', '#Nowner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler

let wm = global.botwm
