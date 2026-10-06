let last = null, turned = 0, dir = 1, laps = 0;
function yawOf(q) { const [w, x, y, z] = q; return Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z)); }
function loop({ t, machine, world, log }) {
  const yaw = yawOf(machine.part("chassis").quat);
  if (last === null) last = yaw;
  let d = yaw - last; if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI;
  turned += d; last = yaw;
  machine.motor("drive").speed(40);
  machine.motor("steer").angle(dir * -84);
  if (Math.abs(turned) >= 2 * Math.PI) { laps += 1; log("lap", laps, "closed at", t.toFixed(2), "s", dir > 0 ? "(left)" : "(right)"); dir = -dir; turned = 0; }
  if (laps >= 2) world.stop("figure eight complete");
  if (Math.round(t * 50) % 50 === 0) world.metric("heading_deg", (yaw * 180) / Math.PI);
}
