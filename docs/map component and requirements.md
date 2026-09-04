````markdown
# Website Layout & World Map Section Update

Please make the following layout and UI changes to the website while maintaining the existing design system, spacing, responsiveness, animations, and overall visual consistency.

---

## 1. Reposition the "What We Do" Section

### Current Section

**What We Do**  
*Three pillars of everything we build.*

This section should **not appear near the beginning of the page**.

### Required New Position

Move the complete **"What We Do"** section so that the page order becomes:

```text
How We Work
↓
What We Do
↓
Why Choose FHI
````

### Requirements

- Move the entire existing section without changing its content unless necessary for layout consistency.
- Preserve its current animations, cards, typography, spacing, and responsive behavior.
- Ensure the transition between:
  - **How We Work → What We Do**
  - **What We Do → Why Choose FHI**
  feels visually natural.
- Avoid excessive vertical spacing between these sections.
- Do not introduce duplicate copies of the section.

---

## 2. Utilize the Empty Space Beside the FAQ Section

There is currently unused/empty horizontal space beside the **FAQ section**.

Instead of leaving this area empty, use it to introduce a visual representation of FHI's international reach and geographic connections.

The FAQ area should effectively become a **two-column layout on larger screens**:

```text
┌───────────────────────────────┬───────────────────────────────┐
│                               │                               │
│          FAQ Content          │       Interactive World       │
│                               │             Map               │
│                               │                               │
└───────────────────────────────┴───────────────────────────────┘
```

On smaller screens, stack the sections vertically while maintaining proper spacing and usability.

Suggested mobile order:

```text
FAQ
↓
World Map
```

---

# 3. Add an Aceternity UI World Map

Use the **Aceternity UI World Map component** for the geographic visualization.

The map should feel integrated into the existing website rather than appearing like a separate demo component.

## Visual Direction

Prefer a **dark-themed world map**, even if some surrounding sections use lighter backgrounds.

The map should have:

- A premium and minimal appearance
- Subtle world geography
- Clear animated connection arcs
- Good visual contrast
- No unnecessary labels or visual clutter
- Responsive scaling
- Smooth animations
- Styling consistent with the FHI website

Avoid making the map excessively bright or visually overpowering compared with the FAQ content.

---

# 4. India Must Be the Primary Geographic Focus

The map should visually emphasize **India as the central hub**.

India should be more prominent than the other locations through one or more subtle techniques such as:

- A brighter location marker
- Slightly larger marker
- Stronger glow
- Higher-opacity connection paths
- More outbound connections
- Central positioning within the visual composition

Do not dramatically distort the world map or zoom so far into India that the other target regions become difficult to understand.

The goal is to communicate:

> **India as the central hub connecting FHI with international markets.**

---

# 5. Primary Geographic Connection Arcs

Create animated geographic connection paths / arc lines originating from **India** and connecting to the following regions:

- Australia
- New Zealand
- Japan
- United Kingdom
- Middle East

Conceptually:

```text
                    United Kingdom
                          ▲
                          │
                          │
Japan ◀────────────── INDIA ─────────────▶ Middle East
                          │
                          │
                          ▼
                      Australia
                          │
                          ▼
                     New Zealand
```

These should use the arc/path functionality provided by the World Map component.

The arcs should appear elegant and curved rather than straight lines.

---

# 6. Add Secondary International Connections

The map should not look like every country communicates only through India.

Add a smaller number of **secondary arcs between the international regions themselves**.

For example:

```text
Australia → New Zealand
Japan → Australia
Middle East → United Kingdom
United Kingdom → Australia
Japan → Middle East
```

You do not need to use these exact connections if another arrangement produces a cleaner composition.

### Important

The visual hierarchy should remain:

```text
India connections = Primary
International-to-international connections = Secondary
```

Secondary arcs should therefore be slightly more subtle through:

- Lower opacity
- Reduced glow
- Thinner paths
- Less prominent animation

Avoid adding so many connections that the map becomes visually noisy.

---

# 7. Location Coordinates

Use geographically reasonable latitude and longitude coordinates for the target locations.

Suggested approximate reference points:

```text
India
Latitude: 20.5937
Longitude: 78.9629

Australia
Latitude: -25.2744
Longitude: 133.7751

New Zealand
Latitude: -40.9006
Longitude: 174.8860

Japan
Latitude: 36.2048
Longitude: 138.2529

United Kingdom
Latitude: 55.3781
Longitude: -3.4360

Middle East
Use a representative central location such as UAE / Dubai
Latitude: 25.2048
Longitude: 55.2708
```

These coordinates may be adjusted slightly if required for better arc rendering.

---

# 8. Animation Behavior

The connection paths should feel active but sophisticated.

Preferred behavior:

- Smooth animated arcs
- Subtle glowing endpoints
- Non-distracting motion
- Staggered or naturally timed animations if supported
- No aggressive pulsing
- No extremely fast path animations

The map should communicate **global connectivity**, not look like a network-monitoring dashboard.

---

# 9. FAQ + World Map Layout

For desktop/tablet widths, create a balanced layout such as:

```text
grid-cols-1 lg:grid-cols-2
```

or an equivalent responsive layout.

Suggested proportions:

```text
FAQ       → 45–50%
World Map → 50–55%
```

The exact ratio may be adjusted depending on the existing FAQ component.

### Requirements

- Both sections should feel vertically balanced.
- The map should not create excessive section height.
- Avoid large unused margins.
- FAQ accordions must remain fully usable.
- Expanding FAQ items should not break the map layout.
- Ensure the map does not overflow its container.

---

# 10. Responsive Behavior

### Desktop

```text
FAQ | World Map
```

### Tablet

Two columns may remain if enough space is available.

Otherwise stack gracefully.

### Mobile

```text
FAQ
↓
World Map
```

For mobile:

- Reduce the map height appropriately.
- Keep important connection paths visible.
- Avoid horizontal overflow.
- Ensure SVG/canvas elements scale correctly.
- Prevent labels or markers from being clipped.

---

# 11. Code Quality Requirements

When implementing the changes:

- Reuse the existing Aceternity UI component wherever possible.
- Avoid rewriting the component unnecessarily.
- Keep geographic connection data separate from UI markup where practical.
- Store connection definitions in a clean array/object structure.
- Avoid hardcoded repeated JSX for every arc.
- Maintain TypeScript compatibility.
- Preserve the existing project architecture.
- Do not introduce unnecessary dependencies.
- Do not modify unrelated sections.
- Ensure there are no hydration errors.
- Ensure animations work correctly in Next.js client components.
- Preserve dark/light-theme compatibility where applicable.

Example connection data structure:

```tsx
const connections = [
  {
    start: {
      lat: 20.5937,
      lng: 78.9629,
      label: "India",
    },
    end: {
      lat: -25.2744,
      lng: 133.7751,
      label: "Australia",
    },
    type: "primary",
  },
];
```

This is only an example structure. Adapt it to the actual API expected by the existing World Map component.

---

# 12. Preserve Existing Website Styling

Do not redesign the entire FAQ section or surrounding page.

The purpose of this update is specifically to:

1. Reposition the **What We Do** section.
2. Make better use of the unused FAQ-section space.
3. Introduce a sophisticated global footprint visualization.
4. Highlight **India as FHI's central geographic hub**.

Everything else should remain visually consistent with the existing website.

---

# 13. Aceternity World Map Component Code

**Reference Prompt**

"use client";

import WorldMap from "@/components/ui/world-map";

import { motion } from "motion/react";

export function WorldMapDemo() {

&#x20; return (

&#x20;   \<div className=" py-40 dark\:bg-black bg-white w-full">

&#x20;     \<div className="max-w-7xl mx-auto text-center">

&#x20;       \<p className="font-bold text-xl md\:text-4xl dark\:text-white text-black">

&#x20;         Remote{" "}

&#x20;         \<span className="text-neutral-400">

&#x20;           {"Connectivity".split("").map((word, idx) => (

&#x20;             \<motion.span

&#x20;               key={idx}

&#x20;               className="inline-block"

&#x20;               initial={{ x: -10, opacity: 0 }}

&#x20;               animate={{ x: 0, opacity: 1 }}

&#x20;               transition={{ duration: 0.5, delay: idx \* 0.04 }}

&#x20;             \>

&#x20;               {word}

&#x20;             \</motion.span>

&#x20;           ))}

&#x20;         \</span>

&#x20;       \</p>

&#x20;       \<p className="text-sm md\:text-lg text-neutral-500 max-w-2xl mx-auto py-4">

&#x20;         Break free from traditional boundaries. Work from anywhere, at the

&#x20;         comfort of your own studio apartment. Perfect for Nomads and

&#x20;         Travellers.

&#x20;       \</p>

&#x20;     \</div>

&#x20;     \<WorldMap

&#x20;       dots={[

&#x20;         {

&#x20;           start: {

&#x20;             lat: 64.2008,

&#x20;             lng: -149.4937,

&#x20;           }, // Alaska (Fairbanks)

&#x20;           end: {

&#x20;             lat: 34.0522,

&#x20;             lng: -118.2437,

&#x20;           }, // Los Angeles

&#x20;         },

&#x20;         {

&#x20;           start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)

&#x20;           end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)

&#x20;         },

&#x20;         {

&#x20;           start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)

&#x20;           end: { lat: 38.7223, lng: -9.1393 }, // Lisbon

&#x20;         },

&#x20;         {

&#x20;           start: { lat: 51.5074, lng: -0.1278 }, // London

&#x20;           end: { lat: 28.6139, lng: 77.209 }, // New Delhi

&#x20;         },

&#x20;         {

&#x20;           start: { lat: 28.6139, lng: 77.209 }, // New Delhi

&#x20;           end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok

&#x20;         },

&#x20;         {

&#x20;           start: { lat: 28.6139, lng: 77.209 }, // New Delhi

&#x20;           end: { lat: -1.2921, lng: 36.8219 }, // Nairobi

&#x20;         },

&#x20;       ]}

&#x20;     />

&#x20;   \</div>

&#x20; );

}



## Reference Component Code

```tsx
"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}

```

---

# Expected Final Result

The final FAQ area should visually communicate something similar to:

```text
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│   Frequently Asked Questions          GLOBAL REACH               │
│                                                                  │
│   ▸ Question 1                       UK                           │
│   ▸ Question 2                         ╲                          │
│   ▸ Question 3                 Japan ── INDIA ── Middle East     │
│   ▸ Question 4                         ╲                          │
│                                         Australia                │
│                                            │                     │
│                                      New Zealand                 │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

The actual implementation should use the Aceternity World Map rather than this simplified diagram.

The result should feel **premium, global, understated, and visually aligned with the FHI brand**, with **India clearly functioning as the primary international hub**.

```
```
