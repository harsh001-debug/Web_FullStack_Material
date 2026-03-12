<!-- Error faced and learnt -->

## 🎯 **Comparison Table: DOM Selection Methods**

| Method | Returns | Use When | Example |
|--------|---------|----------|---------|
| `getElementById("id")` | **Single element** or `null` | One unique element with ID | `getElementById("player1")` |

| `getElementsByClassName("class")` | **HTMLCollection** (array-like) | Multiple elements with same class | `getElementsByClassName("btn")` |

| `getElementsByTagName("tag")` | **HTMLCollection** | Multiple elements of same type | `getElementsByTagName("button")` |

| `querySelector(".class")` | **First matching element** or `null` | Modern, flexible, single element | `querySelector(".start-btn")` |

| `querySelectorAll(".class")` | **NodeList** (array-like) | Modern, flexible, multiple elements | `querySelectorAll(".btn")` |