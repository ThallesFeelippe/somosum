import re

with open('Somos Um — Festividade de Dezembro.svg', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's inspect all rects where y <= 150 or transform translate has y <= 150
print("--- RECTS in y <= 150 ---")
for r in re.finditer(r'<rect([^>]+)>', text):
    content = r.group(1)
    if 'y="' in content or 'translate(' in content:
        # check y value
        m_y = re.search(r'y="([^"]+)"', content)
        m_tr = re.search(r'translate\(([^)]+)\)', content)
        y_val = None
        if m_y:
            y_val = float(m_y.group(1))
        elif m_tr:
            parts = m_tr.group(1).split()
            if len(parts) >= 2:
                y_val = float(parts[1])
        if y_val is not None and y_val <= 150:
            print(f"y={y_val}: {content}")

# Let's inspect all paths in y <= 150
print("\n--- PATHS in y <= 150 ---")
def get_bbox(d_str):
    nums = [float(x) for x in re.findall(r'[-+]?(?:\d*\.\d+|\d+)', d_str)]
    xs = nums[0::2]
    ys = nums[1::2]
    if not xs or not ys:
        return 0, 0, 0, 0
    return min(xs), min(ys), max(xs), max(ys)

for m in re.finditer(r'<path\s+d="([^"]+)"\s+fill="([^"]+)"', text):
    d = m.group(1)
    fill = m.group(2)
    min_x, min_y, max_x, max_y = get_bbox(d)
    if min_y <= 120 and (max_y - min_y) < 150:
        print(f"Path: y={min_y:.1f} to {max_y:.1f}, x={min_x:.1f} to {max_x:.1f}, w={max_x-min_x:.1f}, h={max_y-min_y:.1f}, fill={fill}, len={len(d)}")
