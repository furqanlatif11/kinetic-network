// data/problemsWeFix.ts
import {
  WifiOff,
  Gauge,
  Router,
  AlertTriangle,
  Cable,
  ShieldAlert,
} from "lucide-react";

export const problemsWeFix = [
  {
    icon: WifiOff,
    problem: "Frequent Internet Disconnections",
    solution:
      "We identify signal drops, faulty cabling, and ISP issues to restore stable connectivity.",
  },
  {
    icon: Gauge,
    problem: "Slow Internet Speed",
    solution:
      "Our technicians optimize router settings, bandwidth usage, and line quality.",
  },
  {
    icon: Router,
    problem: "Wi-Fi Dead Zones",
    solution:
      "We redesign Wi-Fi coverage using access points, extenders, and optimal placement.",
  },
  {
    icon: Cable,
    problem: "Damaged or Poor Cabling",
    solution:
      "We test, repair, or replace Ethernet and fiber cables for maximum performance.",
  },
  {
    icon: AlertTriangle,
    problem: "New Router or Modem Not Working",
    solution:
      "We configure, update firmware, and ensure compatibility with your ISP.",
  },
  {
    icon: ShieldAlert,
    problem: "Network Security Issues",
    solution:
      "We secure your network with firewall rules, password policies, and access control.",
  },
];
