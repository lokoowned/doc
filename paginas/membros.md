# 👥 Lista de Membros da DarkLegion

> Nossos guerreiros que compõem a força da DarkLegion

---

<div style="margin-bottom: 20px;">
  <input 
    type="text" 
    id="searchMember" 
    placeholder="🔍 Buscar membro por nickname ou classe..."
    style="width: 100%; padding: 12px 20px; font-size: 16px; border: 2px solid #444; border-radius: 6px; background-color: #2d2d2d; color: #fff; box-sizing: border-box;"
    onkeyup="filterMembers()"
  />
</div>

<table id="membersTable" style="width: 100%; border-collapse: collapse; margin-top: 20px;">
  <thead>
    <tr style="background-color: #1a1a1a; color: #fff;">
      <th style="padding: 12px; text-align: left; border: 1px solid #444;">👤 Nickname</th>
      <th style="padding: 12px; text-align: left; border: 1px solid #444;">⚔️ Classe</th>
      <th style="padding: 12px; text-align: left; border: 1px solid #444;">📅 Data de Entrada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px; border: 1px solid #444; font-weight: bold; color: #ffd700;">👑 xLokoOwneD</td>
      <td style="padding: 10px; border: 1px solid #444;">Guerreiro</td>
      <td style="padding: 10px; border: 1px solid #444;">15/03/2011</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #444; font-weight: bold; color: #c0c0c0;">⭐ Nefertari</td>
      <td style="padding: 10px; border: 1px solid #444;">Mago</td>
      <td style="padding: 10px; border: 1px solid #444;">20/03/2011</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #444; font-weight: bold; color: #c0c0c0;">⭐ TheoS</td>
      <td style="padding: 10px; border: 1px solid #444;">Arqueiro</td>
      <td style="padding: 10px; border: 1px solid #444;">22/03/2011</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #444; font-weight: bold; color: #c0c0c0;">⭐ Kektop</td>
      <td style="padding: 10px; border: 1px solid #444;">Paladino</td>
      <td style="padding: 10px; border: 1px solid #444;">25/03/2011</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #444; font-weight: bold; color: #c0c0c0;">⭐ Bruxa</td>
      <td style="padding: 10px; border: 1px solid #444;">Feiticeira</td>
      <td style="padding: 10px; border: 1px solid #444;">28/03/2011</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #444; font-weight: bold; color: #c0c0c0;">⭐ Rukia</td>
      <td style="padding: 10px; border: 1px solid #444;">Assassino</td>
      <td style="padding: 10px; border: 1px solid #444;">30/03/2011</td>
    </tr>
  </tbody>
</table>

<script>
function filterMembers() {
  const input = document.getElementById('searchMember');
  const filter = input.value.toUpperCase();
  const table = document.getElementById('membersTable');
  const rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    let found = false;
    
    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      if (cell) {
        const textValue = cell.textContent || cell.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          found = true;
          break;
        }
      }
    }
    
    rows[i].style.display = found ? '' : 'none';
  }
}
</script>

---

### 📊 Estatísticas

- **Total de Membros**: 6
- **Liderança**: 1
- **Comando (Officers)**: 5

---

> 💡 **Dica**: Use a barra de busca acima para encontrar rapidamente qualquer membro por nickname ou classe!

> 📝 Para adicionar novos membros, entre em contato com a liderança da guilda.

