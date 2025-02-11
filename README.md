# React Router Catch-All Route Issue

This repository demonstrates a common issue in React Router v6 where a catch-all route (`*`) unexpectedly matches all paths, overriding more specific route definitions. The problem is solved by reordering routes so that the catch-all route appears last.